

export default {
    props: ['title', 'data'],
    template: `
            <section class="keep-todo">
            <div class="todo-container column flex">
                <div class="title">{{title}}</div>
                <ul v-for="item in data.list">
                  <li>{{item}}</li>
                </ul>
            </div>
            </section>
            `
}