
import todoService from '../../service/keep/todo-service.js';

export default {
    template: `
            <section class="keep-todo">
            <div v-for="todo in todos" class="todo-container column flex">
                <div class="todo-title">{{todo.title}}</div>
                <ul v-for="item in todo.list">
                  <li>{{item}}</li>
                </ul>
            </div>
            </section>
            `,
    data() {
        return {
            todos: todoService.query()
        }
    },
}