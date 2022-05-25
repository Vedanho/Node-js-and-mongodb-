const { Router } = require('express')

const {contollersStudents} = require('../contollers/students.controllers')

const router = Router()

router.get('/', contollersStudents.getStudent)
router.post('/', contollersStudents.postStudent)
router.delete('/students/:id',contollersStudents.deleteStudentById)
router.patch('/students/:id', contollersStudents.patchStudentById)

module.exports = router