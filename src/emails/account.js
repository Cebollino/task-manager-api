const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:  email,
        from: 'albmoto.ops@gmail.com',
        subject: 'Welcome to my task APP',
        text: `Hello ${name} , I hope you like my APP. You are the best`
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'albmoto.ops@gmail.com',
        subject: 'Sorry for your lost',
        text: `Hey ${name}! we are sand that you are leaving, could have we done something better? Just tell us!`
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}