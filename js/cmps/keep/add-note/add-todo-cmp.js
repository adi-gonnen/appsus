
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
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
                        <div class="btn-container flex">
                            <input type="color" class="pick-color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                            <button class="btn btn-add-note" @click="addNote">update</button>
                            <button class="btn btn-cancel-note" @click="cancelUpdate">cancel</button>
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
        addNote() {
            if (!this.id) keepService.addNewNote(this.note);
            keepService.updateNote(this.note);
            this.$emit('hideModal', false);      
            },
        cancelUpdate() {
            this.$emit('hideModal', false);
        },
        changeColor() {
            this.color = $emit.target
            console.log($emit.target.value);
        },
        addLine() {
            this.note.data.list.push('');
        },
    
    }
}

