module.exports=app=>{
    const router=require('express').Router();
    const multer = require('multer')
    const Ticket=require('../controllers/ticket.controller');


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './ticketuploads/')
        },
        filename: function (req, file, cb) {
            const fileName = file.originalname + 'PROFILE' + '-' + Date.now()
            cb(null, fileName.replace(/ /g, '-') + '.jpg')
        }
    })


    const upload = multer({ storage: storage });

 

    router.get('/pending',Ticket.getTickets_pending);

    router.get('/solved',Ticket.getTickets_solved);

    router.get('/update',Ticket.updateTicket_support);

    router.post('/submitticket',upload.single('Image'),Ticket.submitTicket);


    app.use("/ticket",router);
    }