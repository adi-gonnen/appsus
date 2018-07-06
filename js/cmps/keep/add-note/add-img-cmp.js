import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input v-model="note.data.url" placeholder="copy url"></input>
                        <button class="btn btn-add-note" @click="addNote">add</button>
                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteImg',
                id: utilsService.generateId(),
                data: { 
                    title: '',
                    url: '',
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