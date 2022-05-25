const Student = require("../models/Student.model")

module.exports.contollersStudents = {
   getStudent: (req, res) => {
      Student.find().then((data) => {
         res.json(data)
      })
   },
   postStudent: (req, res) => {
     Student.create({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age
     }).then((data) => {
        res.json(data)
     })
   },
   deleteStudentById: (req, res) => {
      Student.findByIdAndRemove(req.params.id).then(() => {
         res.json('Студент удален')
      })

   }, 
   patchStudentById: (req, res) => {
       Student.findByIdAndUpdate(req.params.id, {name:req.body.name}).then((data) => {
          res.json(data)
       })
   }
}