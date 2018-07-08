import utilsService from './utils-service.js';


var newNotes = [
    {
        type: 'noteText',
        id: utilsService.generateId(),
        data: { 
            text: '',
            title: '',
            }
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        data: { 
            list: [],
            title: '',
            }
    },
    {
        type: 'noteImg',
        id: utilsService.generateId(),
        data: { 
            url: '',
            title: '',
            }
    }
]

function query() {
    return newNotes
}

export default {
    query
}