import bookService from '../services/books-service.js'

export default {
	props: ['book'],
	template: `
		<article>

			<div class="book-img">
				<router-link :to="'/book/'+book.id">
					<img v-if="book.listPrice.isOnSale" src="./img/sale.png" alt="On sale!!!" class="sale" />
					<img :src="book.thumbnail" :alt="book.title" class="thumbnail" />
				</router-link>
			</div>
			<h3> <router-link :to="'/book/'+book.id"> {{book.title}} </router-link> </h3>
			<p> {{book.subtitle}} </p>
			<p class="price" :class="priceClass">
				<span v-html="currencyIcon"></span>
				{{this.book.listPrice.amount}}
			</p>
			<button @click="removeBook">{{deleteLabel}}</button>
			<router-link :to="'/book/edit/' + book.id">Edit</router-link>

		</article>
	`,
	data() {
		return {
			deleteLabel : 'Delete Book'
		}
	},
	methods: {
		removeBook() {
			console.log('Removing', this.book);
			this.deleteLabel = 'Deleting...'
			bookService.removeBook(this.book.id)
				.then(()=>{
					console.log('Book Deleted!');
				})
				.catch(err=>{
					console.log('Failed to delete');
					this.deleteLabel = 'Delete Book'
				})
		}
	},
	computed: {
		priceClass() {
			// Amount
			let amount = this.book.listPrice.amount;
			let priceClass = '';
			if (amount > 150) priceClass = 'text-red';
			else if (amount < 20) priceClass = 'text-green';
			return priceClass;
		},
		currencyIcon() {
			let currencyCode = this.book.listPrice.currencyCode;
			switch (currencyCode.toUpperCase()) {
				case 'ILS': currencyCode = '&#8362;'; break;
				case 'USD': currencyCode = '&dollar;'; break;
				case 'EUR': currencyCode = '&euro;'; break;
			}
			return currencyCode;
		},
	},
}
