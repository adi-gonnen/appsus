
import utilsService from './utils-service.js';

var NOTES_KEY = 'noteApp'
var gNotes = [];
var gDefaultNotes = [
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#80bbc5',
        data: { 
            title: ':-)',
            text: 'Have A Nice Day',
            }
    },
    {
        type: 'noteImg',
        id: utilsService.generateId(),
        color: '#e49198',
        data: { 
            title: 'still optimistic',
            url: '././img/us.jpg',
            }
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        color: '#bbe09c',
        data: { 
            title: 'things to do before vacation', 
            list: ['book hotels', 'insurance', 'hire a car'],
            }
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#80bbc5',
        data: { 
            title: 'important!',
            text: 'go to the beach this weekend',
            }
    },
    {
        type: 'noteTodo',
        id: utilsService.generateId(),
        color: '#bbe09c',
        data: { 
            title: 'to buy',
            list: ['milk', 'banana', 'bread'],
            }
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#80bbc5',
        data: { 
            title: 'summer vacation', 
            text: 'needs to find a location',
            }
    },
    {
        type: 'noteImg',
            id: utilsService.generateId(),
            color: '#e49198',
            data: { 
                title: 'world cup',
                url: '././img/worldcup.png',
            }
    },
    {
        type: 'noteText',
        id: utilsService.generateId(),
        color: '#80bbc5',
        data: { 
            title: 'beer!!', 
            text: 'drink it cold',
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

function addNewNote(note) {
    gNotes.unshift(note);
    utilsService.saveToStorage(NOTES_KEY, gNotes);
}

function saveAllNotes() {
    utilsService.saveToStorage(NOTES_KEY, gNotes);
}

function getNoteById(id) {
    return utilsService.getItemById(id, gNotes);
}
    
function loadNoteById(id) {
    var notes = utilsService.loadFromStorage(NOTES_KEY);
    var loadedNote = utilsService.getItemById(id, notes);
    utilsService.setItemById(id, gNotes, loadedNote);
    console.log('new', loadedNote);
    utilsService.saveToStorage(NOTES_KEY, notes);
    return loadedNote;
}
export default {
    query,
    removeNote,
    moveNoteUp,
    addNewNote,
    getNoteById,
    saveAllNotes,
    loadNoteById
}