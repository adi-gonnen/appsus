
import editTodo from './edit-note/edit-todo-cmp.js';
import editModal from './edit-modal-cmp.js';

export default {
    mixins: [editModal],
    components: {
        editTodo
    },
    props: ['id', 'data', 'color'],
    template: `
            <section class="keep-todo">
                <div class="todo-container note column flex" :style="{'background-color':color}">
                    ${editModal.template}
                    <div v-if="!showEdit">
                        <div class="note-title">{{data.title}}</div>
                        <ul v-for="item in data.list" class="note-ul">
                            <li class="list-container flex">
                                <span><i class="fas fa-caret-right"></i></span>
                                <div>{{item}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            `,
    data() {
        return {
            addCmpName : 'edit-todo'
        }
    },
}

