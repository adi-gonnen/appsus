

export default {
    template: `
            <section class="note-search flex">
                <input type="text" placeholder="Search a note" v-model="search" @input="searchNote" class="search"/>
            </section>
    `,

    data() {
        return {
            search: ''
        }
    },

    methods: {
        searchNote() {
            this.$emit('searched', this.search);
            console.log('search: ', this.search);
            
        }
    }
}


