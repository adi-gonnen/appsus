
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';



export default {
    props: ['id','showEdit'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex column">
                    <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                    <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
                    <div class="btn-container flex">
                        <div class="wrapper" v-bind:style="note.color">
                            <div class="content">
                                <input type="color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                            </div>
                        </div>
                        <button class="btn btn-add-note" @click="addNote">update</button>
                        <button class="btn btn-cancel-note" @click="cancelUpdate">cancel</button>
s                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteText',
                id: utilsService.generateId(),
                color: '#80bbc5',
                data: {
                    title: '',
                    text: '',
                }
            }
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
            keepService.getNote()
            this.$emit('hideModal', false);
        },
        changeColor() {
            this.color = $emit.target
            console.log($emit.target.value);

        }
    }
}