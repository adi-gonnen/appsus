export default {
	template: `
		<section class="review-add">

			<h3>Add Review</h3>

			<form>

				<label>Full Name:</label>
				<input type="text" name="userName" v-model="review.userName">

				<label>Read at:</label>
				<input type="date" name="readAt" v-model="review.readAt" />

				<label>Rating:</label>
				<select v-model="review.rating">
					<option value="1">1 Star</option>
					<option value="2">2 Star</option>
					<option value="3">3 Star</option>
					<option value="4">4 Star</option>
					<option value="5">5 Star</option>
				</select>

				<label>Review:</label>
				<textarea placeholder="Your review..." v-model="review.text">
				</textarea>

				<button @click.prevent="addReview">Send Review</button>

			</form>

		</section>
	`,
	data() {
		return {
			review: this.emptyReview()
		}
	},
	methods: {
		addReview() {
			this.$emit('add-review', this.review);
			this.review = this.emptyReview();
		},
		emptyReview() {
			return {
				userName: 'Books Reader',
				rating: 5,
				readAt: '',
				text: '',
			};
		},
	},
}
