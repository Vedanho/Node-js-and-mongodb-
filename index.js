const express = require('express')

const mongoose = require("mongoose")

const app = express()

const port = 3000

app.use(express.json())
app.use(require('./routers/student.routers'))

mongoose.connect('mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/students?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => {
    console.log('Server is working')
})
