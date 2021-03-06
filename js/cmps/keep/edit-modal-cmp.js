import keepService from '../../service/keep-service.js';


export default {
  template: `
    <section class="note-btn">
      <div class="notes-btns flex">
        <button class="btn btn-note btn-pin" @click="pinNote"><i class="fas fa-thumbtack"></i></button>
        <button class="btn btn-note btn-delete" @click="deleteNote"><i class="fas fa-trash-alt"></i></button>
        <button class="btn btn-note btn-edit" @click="editNote"><i class="fas fa-edit"></i></button>
      </div>
      <component 
        v-if="showEdit" 
        :id="id"
        @hide="hideModal"
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
      console.log('id::', this.id);
    },
    hideModal(bool) {
      console.log('******');
      this.showEdit = bool;
    }

  }
}
   