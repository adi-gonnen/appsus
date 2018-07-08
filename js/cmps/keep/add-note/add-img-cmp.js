import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    props: ['id'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input v-model="note.data.url" placeholder="copy url"></input>
                        <div class="btn-comtainer">
                            <div class="wrapper" v-bind:style="note.color">
                                <div class="content">
                                    <input type="color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                                </div>
                            </div>
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
                type: 'noteImg',
                id: utilsService.generateId(),
                color: 'cc5b5b',
                data: { 
                    title: '',
                    url: '',
                }
            }
        }
    },
    created: function () {
        //     console.log('this.$route.params in edit', this.$route);
        // console.log('this.$route.params in edit', this.$route.params);
        // const {id} = this.$route.params;
            
        if (this.id) {
            var note = keepService.getNoteById(this.id);
            this.note = note;
        }
        else keepService.addNewNote(this.note);
        
    
        },
    methods: {
        addNote() {
            //move to created- decition if edit or creat new
            keepService.updateNote(this.note);
                
    
            },
        cancelUpdate() {
            
        }
    }
}