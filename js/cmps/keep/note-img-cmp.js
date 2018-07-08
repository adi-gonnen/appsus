import addImg from './add-note/add-img-cmp.js';
import noteBtns from './note-btns-cmp.js';

export default {
    mixins: [noteBtns],
    components: {
        addImg
    },
    props: ['id', 'data', 'color'],
      template: `
            <section class="keep-img">
                <div class="note column flex" :style="{'background-color':color}">
                    ${noteBtns.template}
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
                    addCmpName : 'add-img'
                }
            },
            
    
}
