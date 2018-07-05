

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}



function getCurrDate(ms) {
    // var today = new Date();
    var currDate = new Date(ms);
    var dd = currDate.getDate();
    var mm = currDate.getMonth() + 1; //January is 0!
    var yyyy = currDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return today;
    // console.log(today);
    
}