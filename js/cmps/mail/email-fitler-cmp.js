

export default {
    components: {},
    
    template: `
        <section>
            <input class="e-search" type="text" v-model="filterBy.byName" @input="updateFilterBy" placeholder="search">
            <select class="e-sort" v-model="filterBy.bySort" @change="updateFilterBy">
                <option value="" disabled selected>Sort by</option>
                <option>All</option>
                <option>Unread</option>
                <option>Read</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                byName: null,
                bySort: null,
            }
        }
    },
    created() {

    },
    methods: {
        updateFilterBy() {
            this.$emit('filterMails', this.filterBy)
        }
    }
}