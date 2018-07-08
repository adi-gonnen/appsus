import keepService from '../../service/keep-service.js';

export default {
  template: `
    <section class="note-btn">
    <div class="notes-btns flex">
        <button class="btn btn-note btn-pin" @click="pinNote">pin</button>
        <button class="btn btn-note btn-delete" @click="deleteNote">delete</button>
        <button class="btn btn-note btn-edit" @click="editNote">edit</button>
    </div>
    <component 
        v-if="showEdit" 
        v-bind:completeEdit="showEdit"
        v-bind:id="id"
        :is="addCmpName">
    </component>
    </section>`,
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
      // this.$emit('id', this.id);
      console.log('id::', this.id);
      // keepService.removeNote(this.id);
    }

  }
}
    
    //it was in note-text below btns:
//<add-text v-if="showEdit" v-bind:id="id"></add-text>