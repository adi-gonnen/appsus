export default {
	props: ['txt', 'length'],
	template: `
		<span>

			{{textSummary}} 

			<span v-if="txt.length > this.size" v-show="showMore"> {{moreText}} </span>

			<span v-if="txt.length > this.size" @click="showMore = !showMore" class="read-more">
				<span v-if="showMore"> Read Less </span>
				<span v-else> Read More </span>
			</span>

		</span>
	`,
	data() {
		return {
			showMore: false,
			size: this.length || 100,
		}
	},
	computed: {
		textSummary() {
			return this.txt.substring(0, this.size);
		},
		moreText() {
			return this.txt.substring(this.size, this.txt.length);
		},
	},
}
