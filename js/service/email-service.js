
import utilsService from './utils-service.js'

var emails = [
    {
        name: 'Rose',
        subject: 'Hey',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format('h:mm'),
        id: utilsService.generateId(),
    },
    {
        name: 'Rami',
        subject: 'Bye',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format('h:mm'),
        id: utilsService.generateId(),
    },
    {
        name: 'Rendel',
        subject: 'Why?',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format('h:mm'),
        id: utilsService.generateId(),
    },
    {
        name: 'Romi',
        subject: 'Who?',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format('h:mm'),
        id: utilsService.generateId(),
    }
    
];


// Get emails from storage:
// var emailStorage = loadFromStorage('emails') === null? null : loadFromStorage('emails');
var emailStorage =  utilsService.loadFromStorage('emails')
if (emailStorage) {
  emails = emailStorage
}

// Send emails query
function query() {
    console.log(emails)
    return Promise.resolve(emails);
}


export default {
    query,
}