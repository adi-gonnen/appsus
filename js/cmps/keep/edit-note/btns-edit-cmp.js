import keepService from '../../../service/keep-service.js';


export default {
    template: `
    <section class="note-btn">
        <div class="btn-container flex">
            <div class="wrapper" v-bind:style="note.color">
                <div class="content">
                    <input type="color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                </div>
            </div>
            <button class="btn btn-add-note" @click="addNote">update</button>
            <button class="btn btn-cancel-note" @click="cancelUpdate">cancel</button>
        </div>
</section>`,
    methods: {
        addNote() {
            if (!this.id) keepService.addNewNote(this.note);
            // keepService.saveAllNotes();
            this.$emit('hide', false);      
        },
        cancelUpdate() {
            if (this.id){
                this.note = keepService.loadNoteById(this.id);
            }
            this.$emit('hide', false);
        },
        changeColor() {
            this.color = $emit.target
            // console.log($emit.target.value);
            }
    }
}
