
var TEXT_KEY = 'textApp'
var texts = [
    {
        title: ':-)',
        body: 'Have A Nice Day',
    },
    {
        title: 'important!',
        body: 'go to the beach this weekend',
    },
    {
        title: 'summer vacation',
        body: 'needs to find a location'
    }
]

function query() {
    saveToStorage(TEXT_KEY, texts);
    return texts
}


export default {
    query
}


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}