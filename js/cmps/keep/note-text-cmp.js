
import editText from './edit-note/edit-text-cmp.js';
import editModal from './edit-modal-cmp.js';

export default {
    mixins: [editModal],
    components: {
        editText
    },
    props: ['id', 'data', 'color'],
    template: `
        <section class="keep-text">
            <div class="text-container note column flex" :style="{'background-color':color}">
                ${editModal.template}
                <div v-if="!showEdit">
                    <div class="note-title">{{data.title}}</div>
                    <div class="text-body">{{data.text}}</div>
                </div>
            </div>
        </section>
        `,
    data() {
        return {
            addCmpName : 'edit-text'
        }
    }
        
}