
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';



export default {
    props: ['id','showEdit'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
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
                type: 'noteText',
                id: utilsService.generateId(),
                color: '#dada63',
                data: {
                    title: '',
                    text: '',
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
    
},
methods: {
    addNote() {
        //move to created- decition if edit or creat new
        if (!this.id) keepService.addNewNote(this.note);
        keepService.updateNote(this.note);
        this.$emit('hide-modal', false)        
        },
        cancelUpdate() {

        },
        changeColor() {
            this.color = $emit.target
            console.log($emit.target.value);

        }
    }
}