import bookPreview from './book-preview-cmp.js';

export default {
	props: ['books'],
	template: `
		<section class="book-list">
		<router-link to="/book/edit">Add New Book</router-link>
			<ul>
				<li v-for="(book, idx) in books" :key="book.id">

					<book-preview :book="book"></book-preview>

				</li>
			</ul>

		</section>
	`,
	components: {
		bookPreview,
	},
}
