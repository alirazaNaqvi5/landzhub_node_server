const db = require('../models');
const Op = db.Sequelize.Op;
const Ticket = db.ticket_support;

exports.getTickets_pending = (req, res) => {
    Ticket.findAll({
        where: {
            status: {
                [Op.eq]: 0
            }
        }
    })

        .then(pending => {
           
            res.send(pending);
        })

        .catch(err => {
            res.send("error" + err);
        })

}


exports.getTickets_solved = (req, res) => {

    Ticket.findAll({
        where: {
            status: {
                [Op.eq]: 1
            }
        }
    })

        .then(resolved => {
            res.send(resolved);
        })

        .catch(err => {
            res.send("error" + err);
        })

}


exports.updateTicket_support = (req, res) => {

    Ticket.update(
        {
            status: req.body.status

        },
        {
            where: {
                ticket_id: {
                    [Op.eq]: req.body.ticket
                }
            }
        }
    )

        .then(tickets => {
            res.send(tickets);
        })

        .catch(err => {
            res.send("error" + err);
        })

}



exports.submitTicket = (req, res) => {

    const file = req.file.filename
    const filename = 'https://api.greenageservices.pk/ticketuploads/' + file
    const agriData = {
        user_id: req.body.user_id,
        title: req.body.title,
        message: req.body.message,
        attachement: filename,
        phone_number: req.body.phone_number,
        email: req.body.email,
        location: req.body.location
    }
    Ticket.create(agriData)
        .then(record => {
           res.send(record);
        })
        .catch(err => {
            res.send("error" + err);
        })


}