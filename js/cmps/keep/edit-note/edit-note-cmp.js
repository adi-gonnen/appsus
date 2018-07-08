
import editText from './edit-text-cmp.js'
import editImg from './edit-img-cmp.js'
import editTodo from './edit-todo-cmp.js'

export default {
    components: {
        editText,
        editImg,
        editTodo
    },
    template: `
            <section class="add-note flex">
                <div class="add-container flex">
                    <i class="fas fa-plus"></i>
                    <select id="edit-note" v-model="addType" class="add-note">
                        <option value="editText">memo</option>
                        <option value="editImg">image</option>
                        <option value="editTodo">list</option>
                    </select>
                    <component v-if="addType"
                               @hide="hideModal" 
                               :is="addType"
                               class="new-notes flex">
                    </component>
                </div>
                <router-link :to="'/keep/edit/'"></router-link>
            </section>
            `,
    data: () => {
            return {
                addType: null,
            }
    },
    methods: {
        hideModal(){
            this.addType = null;
        }

    }
    
}