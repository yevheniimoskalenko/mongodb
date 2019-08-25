const mongose = require('mongoose');

mongose.connect("mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test", {
    useNewUrlParser: true
})
mongose.connect('mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test').then(() => console.log('connect has started...'))
    .catch(e => console.log(e))

require('./person.model')
const Person = mongose.model('persons')


const person = new Person({
    name: 'Yevhenii',
    age: 22,
    phones: [0662960620]
})

person.save().then(user => console.log(user)).catch(e => console.log(e))