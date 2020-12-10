const router = require('express').Router()



// Contact Route
const {
    createContact,
    getAllContact,
    updateContact,
    deleteContact
} = require('./Controllers/ContactController')

router.get('/contact', getAllContact)
router.post('/contact',createContact)
router.put('/contact/:id', updateContact)
router.delete('/contact/:id', deleteContact)



// 

module.exports = router