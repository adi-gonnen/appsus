
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <ul v-for="(item,index) in note.data.list" class="todo-list">
                            <li>
                              <input class="text-title" v-model="note.data.list[index]"></input>
                              <button class="btn btn-delete-line" :index="index" @click="deleteLine">X</button>
                            </li>
                        </ul>
                        <div class="btns-list flex">
                            <button class="btn btn-add-list" @click="addLine">+</button>
                            <button class="btn btn-add-note" @click="addNote">update</button>
                        </div>
                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteTodo',
                id: utilsService.generateId(),
                data: { 
                    title: '',
                    list: [],
                    }
            },
        }
    },
    methods: {
        addNote() {
            keepService.updateNote(this.note);
            // console.log('note: ', this.note);
            this.note = {
                type: 'noteTodo',
                id: utilsService.generateId(),
                color: '#ff0000',
                data: { 
                    title: '',
                    list: [],
                    }
            };
            // console.log('note: ', this.note);
        },
        addLine() {
            this.note.data.list.push('');
        },
        deleteLine() {
            console.log('index: ', this.index, this.value);
            
            this.note.data.list.splice(this.index, 1);
        }
    }
}

