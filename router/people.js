const express = require('express')
const router = express.Router()

const {
    deletePeople_id,
    putPeople_id,
    postPeople,
    postPeople_Postman,
    getPeople
} = require('../controller/people')

// router.get('/', getPeople)
// router.post('/', postPeople)
// router.post('/postman', postPeople_Postman)
// router.put('/:id', putPeople_id)
// router.delete('/:id', deletePeople_id) 

router.route('/').get(getPeople).post(postPeople)
router.route('/:id').put(putPeople_id).delete(deletePeople_id)
router.post('/postman', postPeople_Postman)

module.exports = router