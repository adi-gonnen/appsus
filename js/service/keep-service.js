
import utilsService from './utils-service.js';

var NOTES_KEY = 'noteApp'
var gNotes = [];
var gDefaultNotes = [
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#00ff00',
        data: { 
            title: ':-)',
            text: 'Have A Nice Day',
            }
    },
    {
        type: 'noteImg',
        id: utilsService.generateId(),
        color: '#0000ff',
        data: { 
            title: 'still optimistic',
            url: '././img/us.jpg',
            }
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        color: '#ff0000',
        data: { 
            title: 'things to do before vacation', 
            list: ['book hotels', 'insurance', 'hire a car'],
            }
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#00ff00',
        data: { 
            title: 'important!',
            text: 'go to the beach this weekend',
            }
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        color: '#ff0000',
        data: { 
            title: 'to buy',
            list: ['milk', 'banana', 'bread'],
            }
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#00ff00',
        data: { 
            title: 'summer vacation', 
            text: 'needs to find a location',
            }
    }

];

function query() {
    gNotes = utilsService.loadFromStorage(NOTES_KEY);
    if (gNotes) return gNotes;
    gNotes = gDefaultNotes;
    utilsService.saveToStorage(NOTES_KEY, gNotes);
    return gNotes
}

function removeNote(id) {
    var index = gNotes.findIndex(note => note.id === id);
    // console.log('id', id, 'index:', index);
    gNotes.splice(index,1);
    utilsService.saveToStorage(NOTES_KEY, gNotes);
}

function moveNoteUp(id) {
    var index = gNotes.findIndex(note => note.id === id);
    gNotes.unshift(gNotes[index]);
    gNotes.splice(index + 1,1);
    utilsService.saveToStorage(NOTES_KEY, gNotes);
}

function updateNote(note) {
    // console.log(note);
    gNotes.unshift(note);
    utilsService.saveToStorage(NOTES_KEY, gNotes);
}
     
    
export default {
    query,
    removeNote,
    moveNoteUp,
    updateNote

}