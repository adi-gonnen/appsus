
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
                    <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
                    ${btnsEdit.template}
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
}