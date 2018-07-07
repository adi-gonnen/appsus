

import keepService from '../service/keep-service.js';
import noteTodo from '../cmps/keep/note-todo-cmp.js'
import noteImg from '../cmps/keep/note-img-cmp.js'
import noteText from '../cmps/keep/note-text-cmp.js'
import addNote from '../cmps/keep/add-note/add-note-cmp.js'


export default {
    components: {
        noteTodo,
        noteImg,
        noteText,
        addNote
    },
    template: `
            <section>
                <add-note></add-note>
                <div class="keep-app flex" v-if="showNotes">
                    <component  v-for="note in notes" 
                                :is="note.type" 
                                v-bind:data="note.data"
                                v-bind:id="note.id"
                                v-bind:key="note.id"
                                class="notes flex">
                    </component>
                </div>
            </section>
            `,
    data() {
        return {
            notes: keepService.query(),
            showNotes: true
        }
    }
}