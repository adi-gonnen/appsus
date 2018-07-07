
import keepService from '../../service/keep-service.js';
import addText from './add-note/add-text-cmp.js'


export default {
    components: {
        addText
    },
    props: ['id', 'data', 'color'],
      template: `
            <section class="keep-text">
                <div class="text-container column flex" :style="{'background-color':color}">
                    <div class="btns">
                        <button class="btn btn-pin" @click="pinNote">pin</button>
                        <button class="btn btn-delete" @click="deleteNote">delete</button>
                        <button class="btn btn-edit" @click="editNote">edit</button>
                    </div>
                    <div class="title">{{data.title}}</div>
                    <div class="text-body">{{data.text}}</div>
                </div>
                <add-text v-if="showEdit" v-bind:id="id"></add-text>
            </section>
            `,
            data() {
                return {
                    showEdit: false,
                }
            },
            methods: {
                deleteNote() {
                    keepService.removeNote(this.id);
                    // console.log('id:::', this.id);
                    
                },
                pinNote() {
                    keepService.moveNoteUp(this.id);
                },
                editNote() {
                    this.showEdit = true;
                    this.$emit('currNote', this.id);
                    console.log('id::', this.id);
                    // keepService.removeNote(this.id);
                }
        
            }
}