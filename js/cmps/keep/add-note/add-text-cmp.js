
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
                        <button class="btn btn-add-note" @click="addNote">add</button>
                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteText',
                id: utilsService.generateId(),
                data: { 
                    title: '',
                    text: '',
                    }
            }
        }
    },
    methods: {
        addNote() {
            keepService.addNewNote(this.note)
        }
    }
}