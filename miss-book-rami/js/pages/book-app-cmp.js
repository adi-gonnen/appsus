import booksService from '../services/books-service.js';
import bookFilter from '../cmps/book-filter-cmp.js';
import bookList from '../cmps/book-list-cmp.js';

export default {
	template: `
		<section class="book-app">

			<book-filter @filtered="setFilter">
			</book-filter>

			<book-list :books="booksToShow">
			</book-list>

		</section>
	`,
	components: {
		bookFilter,
		bookList,
	},
	data() {
		return {
			books: [],
			filter: null,
		}
	},
	created() {
		booksService.query()
			.then(books => {
				this.books = books;
			})
	},
	methods: {
		setFilter(filter) {
			this.filter = filter;
		},
	},
	computed: {
		booksToShow() {
			let booksToShow = this.books;

			if (this.filter) {

				// Search by search
				booksToShow = booksToShow.filter(book => {
					return book.title.includes(this.filter.by);
				});

				// Filter by price range
				booksToShow = booksToShow.filter(book => {
					let price = book.listPrice.amount;
					return (price >= this.filter.fromPrice && price <= this.filter.toPrice);
				});

				// Sort by
				switch (this.filter.filter) {
					case 'name':
						booksToShow = booksToShow.sort((a, b) => {
							if (a.title < b.title)
								return -1;
							if (a.title > b.title)
								return 1;
							return 0;
							// return a.title < b.title; // Not working?!
						});
						break;
					case 'price':
						booksToShow = booksToShow.sort((a, b) => {
							return a.listPrice.amount - b.listPrice.amount;
						});
						break;
					case 'date':
						booksToShow = booksToShow.sort((a, b) => {
							return a.publishedDate - b.publishedDate;
						});
						break;
				}

				// Sort ASC/DESC
				if (this.filter.sortASC) booksToShow.reverse();

			}

			return booksToShow;
		}
	},
}
