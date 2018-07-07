
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    props: ['id'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
                        <div class="btn-comtainer">
                            <div class="wrapper" v-bind:style="note.color">
                                <div class="content">
                                    <input type="text" v-on:input="note.color = $event.target.value" placeholder="write you color"/>
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
        // console.log('id!! ', this.id);
        var note = keepService.getNoteById(this.id);
        if (note) this.note = note;
        console.log('note!! ', this.note);
    },
    methods: {
        addNote() {
            keepService.updateNote(this.note)
        },
        cancelUpdate() {

        },
        changeColor() {
            this.color = $emit.target
            console.log($emit.target.value);

        }
    }
}