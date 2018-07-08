
import keepService from '../../service/keep-service.js';
import addTodo from './add-note/add-todo-cmp.js';
import noteBtns from './note-btns-cmp.js';

export default {
    mixins: [noteBtns],
    components: {
        addTodo
    },
    props: ['id', 'data', 'color'],
    template: `
            <section class="keep-todo">
                <div class="todo-container note column flex" :style="{'background-color':color}">
                    ${noteBtns.template}
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
            addCmpName : 'add-todo'
        }
    },
}

