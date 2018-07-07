import booksService from '../services/books-service.js';
import longText from '../cmps/long-text-cmp.js';
import reviewAdd from '../cmps/review-add-cmp.js';
import reviewList from '../cmps/review-list-cmp.js';

export default {
  template: `
		<section class="book-details"  v-if="book">
		<button @click="nextBook">Next Book</button>

			<div class="book-info">

				<h2> {{book.title}} </h2>
				<p> {{book.subtitle}} </p>
				<p> <em> By <span v-for="author in book.authors">{{author}} </span> </em> </p>
				<p> Published on {{book.publishedDate}} ; {{publishDateText}} </p>
				<p> <long-text :txt="book.description" length="100"></long-text> </p>
				<p> {{readingLength}} ({{book.pageCount}} pages). </p>
				<p class="price" :class="priceClass">
					<span v-html="currencyIcon"></span>
					{{this.book.listPrice.amount}}
				</p>

				<button @click="$router.push('/book')"> Back </button>

				<review-list :reviews="book.reviews" @delete-review="deleteReview"></review-list>

				<review-add @add-review="saveReview"></review-add>


			</div>
			<div class="book-img">

				<img v-if="book.listPrice.isOnSale" src="./img/sale.png" alt="On sale!!!" class="sale" />
				<img :src="book.thumbnail" :alt="book.title" class="thumbnail" />

			</div>


		</section>
	`,
  components: {
    longText,
    reviewAdd,
    reviewList
  },
  data() {
    return {
      book: null
    };
  },
  created() {
    this.loadBook();
  },
  methods: {
    loadBook() {
      booksService
        .getBookById(this.$route.params.bookId)
        .then(book => (this.book = book));
    },
    saveReview(review) {
      booksService.addBookReview(this.book.id, review);
    },
    deleteReview(reviewIdx) {
      booksService.removeBookReview(this.book.id, reviewIdx);
    },
    nextBook() {
      booksService.getNextBookId(this.book.id).then(bookId => {
        this.$router.push(`/book/${bookId}`);
      });
    }
  },
  watch: {
    '$route.params.bookId': function(newBookId) {
      console.log('$route.params.bookId has changed!', newBookId);
      this.loadBook();
    }
  },
  computed: {
    priceClass() {
      let amount = this.book.listPrice.amount;
      let priceClass = '';
      if (amount > 150) priceClass = 'text-red';
      else if (amount < 20) priceClass = 'text-green';
      return priceClass;
    },
    currencyIcon() {
      let currencyCode = this.book.listPrice.currencyCode;
      switch (currencyCode.toUpperCase()) {
        case 'ILS':
          currencyCode = '&#8362;';
          break;
        case 'USD':
          currencyCode = '&dollar;';
          break;
        case 'EUR':
          currencyCode = '&euro;';
          break;
      }
      return currencyCode;
    },
    readingLength() {
      let pages = +this.book.pageCount;
      let readingLength = '';
      if (pages > 500) readingLength = 'Long reading';
      else if (pages > 200) readingLength = 'Decent reading';
      else if (pages < 100) readingLength = 'Light reading';
      return readingLength;
    },
    publishDateText() {
      let yearsAgo = 2018 - this.book.publishedDate;
      let publishText = '';
      if (yearsAgo > 10) publishText = 'Veteran Book';
      else if (yearsAgo < 1) publishText = 'New Book!';
      return publishText;
    }
  }
};
