
import addText from './add-note/add-text-cmp.js';
import noteBtns from './note-btns-cmp.js';

export default {
    mixins: [noteBtns],
    components: {
        addText
    },
    props: ['id', 'data', 'color'],
    template: `
        <section class="keep-text">
            <div class="text-container note column flex" :style="{'background-color':color}">
                ${noteBtns.template}
                <div v-if="!showEdit">
                    <div class="note-title">{{data.title}}</div>
                    <div class="text-body">{{data.text}}</div>
                </div>
            </div>
        </section>
        `,
    data() {
        return {
            addCmpName : 'add-text'
        }
    }
        
}