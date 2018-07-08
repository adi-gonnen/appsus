

export default {
    template: `
      <section class="note-btn">
        <div class="btn-comtainer">
            <div class="wrapper" v-bind:style="note.color">
                <div class="content">
                    <input type="color" value="#ff0000" v-on:input="note.color = $event.target.value" placeholder="write your color"/>
                </div>
            </div>
            <button class="btn btn-add-note" @click="addNote">update</button>
            <button class="btn btn-cancel-note" @click="cancelUpdate">cancel</button>
        </div>
    </section>`,
    data: () => {
        return {
            note: {
                type: 'noteImg',
                id: utilsService.generateId(),
                color: 'cc5b5b',
                data: { 
                    title: '',
                    url: '',
                }
            }
        }
    },
    created: function () {
    //     console.log('this.$route.params in edit', this.$route);
    // console.log('this.$route.params in edit', this.$route.params);
    // const {id} = this.$route.params;
        
        // console.log('id!! ', this.id);
        var note = keepService.getNoteById(this.id);
        if (note) this.note = note;
        console.log('note!! ', this.note);

    },
    methods: {
        addNote() {
            keepService.updateNote(this.note);
            this.note = {
                type: 'noteText',
                id: utilsService.generateId(),
                color: '#dada63',
                data: {
                    title: '',
                    text: '',
                }
            }
        },
        cancelUpdate() {
            
        }
    }
}

