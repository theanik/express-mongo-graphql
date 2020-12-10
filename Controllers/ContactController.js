const Contact = require('../Models/Contact')

const createContact = async(req, res) => {
    let {name, email, phone} = req.body

    const contact = new Contact({name,email,phone})
    let result = await contact.save();

    if(result){
        res.json({
            data : result,
            massage:"Contact Created"
        }).status(201)
    }else{
        res.json({
            data : null,
            massage:"Error"
        }).status(500)
    }
    
}

const getAllContact = async (req, res) => {
    const contacts = await Contact.find()

    if(contacts){
        res.json({
            data : contacts,
            massage:"Data feached"
        }).status(201)
    }else{
        res.json({
            data : null,
            massage:"Error"
        }).status(500)
    }
}



const updateContact = (req, res) => {
    let {name, email, phone} = req.body
    let {id} = req.params

    Contact.findByIdAndUpdate({
        _id : id
    },{
        $set : {
            name, email, phone
        }
    },
    {new:true})
    .then(contact => {
        res.json({
            data : contact,
            massage:"Data Updated"
        }).status(201)
    }).catch(e=> {
        res.json({
            data : null,
            massage: e
        }).status(500)
    })
}

const deleteContact = (req, res) => {
    let {id} = req.params

    Contact.findByIdAndDelete({_id : id})
    .then(contact => {
        res.json({
            data : contact,
            massage:"Data Deleted"
        }).status(201)
    }).catch(e=> {
        res.json({
            data : null,
            massage: e
        }).status(500)
    })
}


module.exports = {
    createContact,
    getAllContact,
    updateContact,
    deleteContact
}