

import keepService from '../service/keep-service.js';
import noteTodo from '../cmps/keep/note-todo-cmp.js'
import noteImg from '../cmps/keep/note-img-cmp.js'
import noteText from '../cmps/keep/note-text-cmp.js'


export default {
    components: {
        noteTodo,
        noteImg,
        noteText
    },
    template: `
            <section class="keep-app flex">
                <component  v-for="note in notes" 
                            :is="note.type" 
                            v-bind:title="note.title" 
                            v-bind:data="note.data"
                            v-bind:key="note.id">
                </component>
            </section>
            `,
    data() {
        return {
            notes: keepService.query()
        }
    }
}