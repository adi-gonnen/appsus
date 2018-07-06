

export default {
    template: `
            <section class="add-note flex">
                <p>add a new note:</p>
                <input list="add-note" type="txt" class="add-note" @onkeydown="addNote" placeholder="choose type of notes">
                    <datalist id="add-note">
                        <option value="text"/>
                        <option value="image"/>
                        <option value="list"/>
                    </datalist>
                </input>
            </section>
            `,
    data: () => {
        return {
            addType: ''
        }
            
        },
    methods: {
        addNote() {
            // this.$emit('typeOfNote', this.addType);
            // console.log('addType: ', addType);
        }
    }
    
}