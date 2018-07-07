
import keepService from '../../service/keep-service.js';

export default {
    props: ['id', 'data', 'color'],
    template: `
            <section class="keep-todo">
            <div class="todo-container column flex" :style="{'background-color':color}">
                <div class="btns">
                    <button class="btn btn-pin" @click="pinNote">pin</button>
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
            keepService.removeNote(this.id);
            // console.log('id:::', id);
            
        },
        pinNote() {
            keepService.moveNoteUp(this.id)
        }

    }
}

