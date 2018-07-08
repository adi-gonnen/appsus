

import keepService from '../service/keep-service.js';
import noteTodo from '../cmps/keep/note-todo-cmp.js'
import noteImg from '../cmps/keep/note-img-cmp.js'
import noteText from '../cmps/keep/note-text-cmp.js'
import addNote from '../cmps/keep/add-note/add-note-cmp.js'
import searchNote from '../cmps/keep/search-note-cmp.js'


export default {
    components: {
        noteTodo,
        noteImg,
        noteText,
        addNote,
        searchNote
    },
    template: `
            <section>
                <div><button class="exit-keep" @click="exitKeepApp">X</button></div>
                <div class="search-add-container flex">
                    <search-note @searched="setSearch"></search-note>
                    <add-note></add-note>
                </div>
                <div class="keep-app flex" v-if="showNotes">
                <!-- <router-link to="'/keep'"> -->
                    <component  :notes="notesToShow" v-for="note in notesToShow" 
                    :is="note.type" 
                    v-bind:data="note.data"
                    v-bind:id="note.id"
                    v-bind:color="note.color"
                    v-bind:key="note.id"
                    class="notes flex">
                    </component>
                <!-- </router-link> -->
                </div>
            </section>
            `,
    data() {
        return {
            notes: keepService.query(),
            showNotes: true,
            search: null
        }
    },
    computed: {
        notesToShow() {
            if (!this.search) return this.notes;
            else {
                var notesToShow1 = this.notes.filter(note => {
                    return note.data.title.includes(this.search)
                })
                console.log(notesToShow1)
                return notesToShow1
            }
        }


    },
    methods: {
        setSearch(search) {
            console.log('search!', search);

            this.search = search;
        },
        exitKeepApp() {
            this.$router.push('/')
        }

    },
}