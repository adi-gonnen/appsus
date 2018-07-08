
import utilsService from './utils-service.js'

var EMAILS_KEY = 'emails'

var emails = [
    {
        name: 'Rose',
        subject: 'Hey',
        body: 'Aorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
        id: utilsService.generateId(),
    },
    {
        name: 'Rami',
        subject: 'Bye',
        body: 'Borem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
        id: utilsService.generateId(),
    },
    {
        name: 'Rendel',
        subject: 'Who?',
        body: 'Corem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
        id: utilsService.generateId(),
    },
    {
        name: 'Rei',
        subject: 'Do?',
        body: 'Dorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
        id: utilsService.generateId(),
    },
    {
        name: 'Roo',
        subject: 'You?',
        body: 'Dorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
        id: utilsService.generateId(),
    },
    {
        name: 'Ree',
        subject: 'Me?',
        body: 'Dorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        isRead: false,
        sentAt: moment().format("MMM Do YY"),
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
    return Promise.resolve(emails)
}

// Get email by Id
function getEmailById(id) {
    let email = emails.find(email => email.id === id)
    return Promise.resolve(email)
}

function changeMailStatus(mailId) {
    let emailIdx = emails.findIndex(email => email.id === mailId)
    emails[emailIdx].isRead = true;
    utilsService.saveToStorage(EMAILS_KEY, emails)
    return Promise.resolve(emails[emailIdx])
}

function deleteEmail(emailIdx) {
    console.log('idddxxxxxx ',emailIdx)
    emails.splice(emailIdx, 1)
    utilsService.saveToStorage(EMAILS_KEY, emails)
    return query()
}

function unreadMail(){
    var unread = emails.filter(email => !email.isRead)
    return Promise.resolve(unread.length)
}

function countEmails() {
    var read = 0;
    var total = 0;
    for(var i = 0; i < emails.length; i++) {
        if (emails[i].isRead) read++
        total++
    }
    return Promise.resolve({read: read, total: total})
}

function addMail(email) {
    emails.unshift({
        name: 'Me',
        subject: email.subject,
        body: email.body,
        isRead: false,
        sentAt: moment().format("'MMM' Do YY"),
        id: utilsService.generateId(),
    })
    utilsService.saveToStorage(EMAILS_KEY, emails)
    return Promise.resolve('Success')
}


export default {
    query,
    getEmailById,
    changeMailStatus,
    deleteEmail,
    unreadMail,
    countEmails,
    addMail
}