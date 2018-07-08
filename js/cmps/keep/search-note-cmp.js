

export default {
    template: `
            <section class="note-search flex">
                <input type="text" placeholder="Search a note" v-model="search" @keydown="searchNote" class="search"/>
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
        }
    }
}


