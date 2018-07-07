
import utilsService from '../../../service/utils-service.js';
import keepService from '../../../service/keep-service.js';

export default {
    props: ['id'],
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="note.data.title" placeholder="write title"></input>
                        <input class="text-body" v-model="note.data.text" placeholder="write your memo"></input>
                        <button class="btn btn-add-note" @click="addNote">update</button>
                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            note: {
                type: 'noteText',
                id: utilsService.generateId(),
                color: '#00ff00',
                data: { 
                    title: '',
                    text: '',
                }
            }
        }
    },
    created() {
        console.log('id!! ', this.id);
        
		// booksService.query()
		// 	.then(books => {
		// 		this.books = books;
		// 	})
	},
    methods: {
        addNote() {
            keepService.updateNote(this.note)
        }
    }
}