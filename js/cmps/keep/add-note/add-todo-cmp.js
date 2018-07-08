
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    props: ['id'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <ul v-for="(item,index) in note.data.list" class="todo-list">
                            <li>
                              <input class="text-title" v-model="note.data.list[index]"></input>
                              <button class="btn btn-delete-line" @click="deleteLine(index)">X</button>
                            </li>
                        </ul>
                        <div class="btns-list flex">
                            <div class="content">
                                <input type="color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                            </div>
                            <button class="btn btn-add-list" @click="addLine">+</button>
                            <button class="btn btn-add-note" @click="saveNote">update</button>
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
                color: '#7790e0',
                data: { 
                    title: '',
                    list: [],
                    }
            },
        }
    },
    created: function () {
        //     console.log('this.$route.params in edit', this.$route);
        // console.log('this.$route.params in edit', this.$route.params);
        // const {id} = this.$route.params;
            
            // console.log('id!! ', this.id);
            if (this.id) {
                var note = keepService.getNoteById(this.id);
                keepService.updateNote(note);
            }
            else keepService.addNewNote(this.note);
            
    
        },
    methods: {
       
        addLine() {
            this.note.data.list.push('');
        },
        deleteLine(index) {
            console.log('index: ', index);
            this.note.data.list.splice(index, 1);
        },
        cancelUpdate() {
            
        }
    }
}

