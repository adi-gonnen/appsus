<<<<<<< HEAD
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

export default {
  saveToStorage,
  loadFromStorage,
  generateId,
=======


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
    
>>>>>>> f292e7ca17f49b1f09efdc98c40aeeb4120e83aa
}