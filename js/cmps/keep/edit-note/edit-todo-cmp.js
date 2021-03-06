
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';
import btnsEdit from './btns-edit-cmp.js';


export default {
    mixins: [btnsEdit],
    props: ['id'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex column">
                    <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                    <ul v-for="(item,index) in note.data.list" class="todo-list">
                        <li class="add-line-container flex">
                            <input class="text-title" v-model="note.data.list[index]"></input>
                            <button class="btn btn-delete-line" @click="deleteLine(index)">X</button>
                        </li>
                    </ul>
                    <div class="btns-list flex column">
                        <button class="btn btn-add-list" @click="addLine">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    ${btnsEdit.template}
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteTodo',
                id: utilsService.generateId(),
                color: '#bbe09c',
                data: { 
                    title: '',
                    list: [],
                    }
            },
        }
    },
    created: function () {
            if (this.id) {
                var note = keepService.getNoteById(this.id);
                this.note = note;
            }
        },
    methods: {
        addLine() {
            this.note.data.list.push('');
        },
        deleteLine(index) {
            this.note.data.list.splice(index,1);
        }
    }
}

