

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
                <h1>keep everything...</h1>
                <search-note @searched="setSearch"></search-note>
                <add-note></add-note>
                <div class="keep-app flex" v-if="showNotes">
                <!-- <router-link to="'/keep'"> -->
                    <component  :notes="notesToShow" v-for="note in notes" 
                    :is="note.type" 
                    v-bind:data="note.data"
                    v-bind:id="note.id"
                    v-bind:color="note.color"
                    v-bind:key="note.id"
                    class="notes flex">
                    </component>
                <!-- </router-link> -->
                </div>
                <ul>TODO: 
                    <li>connect routs</li>
                    <li>cancel button</li>
                    <li>delete confirm alert</li>
                    <li>clear modal after update</li>
                    <li>add promises</li>
                    <li>search</li>
                    <li>design!!!</li>
                </ul>   

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
            else return this.notes.filter(note =>
                note.data.title.includes(this.search))
        }
    },
    methods: {
        setSearch(search) {
            this.search = search;
        }
        
    },
}