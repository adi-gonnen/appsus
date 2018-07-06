
import utilsService from './utils-service.js';

var NOTES_KEY = 'noteApp'

function query() {
    var notes = utilsService.loadFromStorage(NOTES_KEY);
    if (notes) return notes;
    var notes = [
        {
            type: 'noteText',
            id: utilsService.generateId(),
            title: ':-)',
            data: { text: 'Have A Nice Day' },
        },
        {
            type: 'noteImg',
            id: utilsService.generateId(),
            title: 'still optimistic',
            data: { url: '././img/us.jpg' },
        },
        {
            type: 'noteTodo',
            id: utilsService.generateId(),
            title: 'things to do before vacation',
            data: { list: ['book hotels', 'insurance', 'hire a car'] },
        },
        {
            type: 'noteText',
            id: utilsService.generateId(),
            title: 'important!',
            data: { text: 'go to the beach this weekend' },
        },
        {
            type: 'noteTodo',
            id: utilsService.generateId(),
            title: 'to buy',
            data: { list: ['milk', 'banana', 'bread'] },
        },
        {
            type: 'noteText',
            id: utilsService.generateId(),
            title: 'summer vacation',
            data: { text: 'needs to find a location' },
        }

    ]
    utilsService.saveToStorage(NOTES_KEY, notes)
    return notes
}


export default {
    query
}