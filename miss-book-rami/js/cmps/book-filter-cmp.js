export default {
	template: `
		<section class="book-filter">

			<div>
				<label for="">Filter By:</label> 
				<select id="by" v-model="filterBy.filter" @change="updateFilter">
					<option value="" disabled selected>- Select -</option>
					<option value="name">Name</option>
					<option value="price">Price</option>
					<option value="date">Publish Date</option>
				</select>
				<img alt="Sort desc/asc" class="sort-direction"
					v-bind:src="sortImg"
					v-show="filterBy.filter"
					@click="filterBy.sortASC = !filterBy.sortASC" />
			</div>

			<div>
				<label for="q">Search:</label> 
				<input type="text" id="q" 
					v-model="filterBy.by" 
					@input="updateFilter"/>
			</div>

			<div>
				<label for="min-price">Min Price:</label> 
				<input type="number" id="min-price" 
					v-model="filterBy.fromPrice" 
					v-bind:max="filterBy.toPrice" 
					@input="updateFilter"/>
			</div>

			<div>
				<label for="max-price">Max Price:</label> 
				<input type="number" id="max-price" 
					v-model="filterBy.toPrice" 
					v-bind:min="filterBy.fromPrice" 
					@input="updateFilter" />
			</div>

		</section>
	`,
	data() {
		return {
			filterBy: {
				filter: '',
				sortASC: true,
				by: '',
				fromPrice: 0,
				toPrice: 1000,
			}
		}
	},
	methods: {
		updateFilter(ev) {
			return this.$emit('filtered', this.filterBy);
		}
	},
	computed: {
		sortImg() {
			return (this.filterBy.sortASC) ? './img/sort-by-asc.png' : './img/sort-by-desc.png';
		}
	}
}
