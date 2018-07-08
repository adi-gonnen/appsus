import editImg from './edit-note/edit-img-cmp.js';
import editModal from './edit-modal-cmp.js';

export default {
    mixins: [editModal],
    components: {
        editImg
    },
    props: ['id', 'data', 'color'],
      template: `
            <section class="keep-img">
                <div class="note column flex" :style="{'background-color':color}">
                    ${editModal.template}
                    <div v-if="!showEdit" class="img-container flex column"> 
                        <div class="note-title">{{data.title}}</div>
                        <img v-bind:src="data.url" v-bind:title="data.url">   
                    </div    
                    </img>
                </div>
            </section>
            `,
            data() {
                return {
                    addCmpName : 'edit-img'
                }
            },
            
    
}
