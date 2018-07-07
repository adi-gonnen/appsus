
import addText from './add-text-cmp.js'
import addImg from './add-img-cmp.js'
import addTodo from './add-todo-cmp.js'

export default {
    components: {
        addText,
        addImg,
        addTodo
    },
    template: `
            <section class="add-note flex">
                <p>add a new note:</p>
                <!-- <input list="add-note" v-model="addType" type="txt" class="add-note" @onkeydown="addNote" placeholder="choose type of notes"> -->
                    <select id="add-note" v-model="addType" class="add-note" @onkeydown="addNote">
                        <option value="addText">memo</option>
                        <option value="addImg">image</option>
                        <option value="addTodo">list</option>
                    </select>
                <!-- </input> -->
                <component v-if="addType"
                           :is="addType"
                           class="new-notes flex">
                </component>
            </section>
            `,
    data: () => {
            return {
                addType: null,
                showNotes: true
            }
    },
    methods: {
        addNote() {
           this.$emit('showNotes', false)
        }
    }
    
}