

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function generateId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getItemById(id, items) {
	var item = items.find(item => item.id === id);
    return item;
}

function setItemById(id, items, newItem) {
    items.forEach((item, idx) => {if (item.id===id) items[idx] = newItem;});
}


export default {
    saveToStorage,
    loadFromStorage,
    generateId,
    getItemById,
    setItemById
}
