
import keepService from '../../service/keep-service.js';

export default {
    props: ['id', 'data'],
    template: `
            <section class="keep-todo">
            <div class="todo-container column flex">
                <div class="btns">
                    <button class="btn btn-pin">pin</button>
                    <button class="btn btn-delete" @click="deleteNote">delete</button>
                    <button class="btn btn-edit">edit</button>
                </div>
                <div class="title">{{data.title}}</div>
                <ul v-for="item in data.list">
                  <li>{{item}}</li>
                </ul>
            </div>
            </section>
            `,
    methods: {
        deleteNote() {
            console.log(this.id);
            
            var id = this.id
            keepService.removeNote(id);
            console.log('id:::', id);
            
        }

    }
}

