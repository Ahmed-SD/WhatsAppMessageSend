const accountSid = 'AC9e2f8493f8bdc52c89ac422c8531707f';
const authToken = '56c23c1b3d611b9a417d8f0a8c239f93';
const client = require('twilio')(accountSid, authToken);



for(let i=0;i<60;i++){
    client.messages
        .create({
            body: 'maja ayi.....',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919427965632'
        })
        .then(message => console.log(message.sid))  
        .done();
}
