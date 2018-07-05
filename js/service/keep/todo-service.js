

var TODO_KEY = 'todoApp'
var todos = [
    {
       'title': 'to buy',
       'list': ['milk', 'banana', 'bread']
    },
    {
        'title': 'things to do before vacation',
        'list': ['book hotels', 'insurance', 'hire a car']
    },
]

function query() {
    saveToStorage(TODO_KEY, todos);
    return todos
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