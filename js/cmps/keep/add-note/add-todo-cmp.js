import utilsService from '../../../service/utils-service.js';

export default {
    template: `
            <section class="add-text flex">
                <div class="modal-add-note flex">
                    <div class="add-title flex column">
                        <input class="text-title" v-model="data.title"></input>
                        <ul class="todo-list" v-for "item in todo" v-model="data.text">
                            <li v-model="item"></li>
                        </ul>
                    </div>
                </div>
            </section>
            `,
    data: () => {
        return {
            type: 'noteText',
            id: utilsService.generateId(),
            data: { 
                todo: [],
                title: '',
                }
        }
    },
    methods: {
        
    }
}

