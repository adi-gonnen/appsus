
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
                    <select id="add-note" v-model="addType" class="add-note">
                        <option value="addText">memo</option>
                        <option value="addImg">image</option>
                        <option value="addTodo">list</option>
                    </select>
                <component v-if="addType"
                           :is="addType"
                           class="new-notes flex">
                </component>
                <router-link :to="'/keep/edit/'"></router-link>
            </section>
            `,
    data: () => {
            return {
                addType: null,
            }
    },
    
}