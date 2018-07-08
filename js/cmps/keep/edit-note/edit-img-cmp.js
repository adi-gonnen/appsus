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
                    <input v-model="note.data.url" placeholder="copy url"></input>
                    ${btnsEdit.template}
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteImg',
                id: utilsService.generateId(),
                color: '#e49198',
                data: { 
                    title: '',
                    url: '',
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
}