export default {
	props: ['reviews'],
	template: `
		<section class="review-list">

			<h3>Reviews</h3>

			<ul v-if="hasReviews">
				<li v-for="(review, idx) in reviews">

					<button @click="deleteReview(idx)">X</button>

					<strong>{{review.userName}}</strong>
					<div> {{stars(review.rating)}} </div>
					{{review.readAt}}
					<p>{{review.text}}</p>

				</li>
			</ul>
			<p v-else>This book has no review, yet...</p>

		</section>
	`,
	methods: {
		deleteReview(idx) {
			this.$emit('delete-review', idx);
		},
		stars(num) {
			let starsHTML = '';
			for (let i = 0; i < num; i++) starsHTML += '⭐';
			return starsHTML;
		}
	},
	computed: {
		hasReviews() {
			return (this.reviews.length > 0);
		},
	}
}
