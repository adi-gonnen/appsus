
import utilsService from './utils-service.js';

var NOTES_KEY = 'noteApp'
var gNotes = [];
var gDefaultNotes = [
    {
        type: 'noteText',
        id: utilsService.generateId(),
        data: { 
            text: 'Have A Nice Day',
            title: ':-)',
            },
    },
    {
        type: 'noteImg',
        id: utilsService.generateId(),
        data: { 
            url: '././img/us.jpg',
            title: 'still optimistic',
            },
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        data: { 
            list: ['book hotels', 'insurance', 'hire a car'],
            title: 'things to do before vacation', 
            },
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        data: { 
            text: 'go to the beach this weekend',
            title: 'important!',
            },
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        data: { 
            list: ['milk', 'banana', 'bread'],
            title: 'to buy',
            },
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        data: { 
            text: 'needs to find a location',
            title: 'summer vacation', 
            },
    }

];

function query() {
    gNotes = utilsService.loadFromStorage(NOTES_KEY);
    if (gNotes) return gNotes;
    gNotes = gDefaultNotes;
    updateNotes(gNotes);
    return gNotes
}

function removeNote(id) {
    var index = gNotes.findIndex(note => note.id === id);
    console.log('id', id, 'index:', index);
    
    gNotes.splice(index,1);
    updateNotes(gNotes);
}

function updateNotes(notes) {
    utilsService.saveToStorage(NOTES_KEY, notes);
}
// function getIndexById(id, notes) {
// 	var index = notes.find(note, index) => note.id === id);
// 	return Promise.resolve(index);
// }

export default {
    query,
    removeNote
}