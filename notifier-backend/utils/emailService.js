const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY)

const sendBirthdayReminder = async(to, friendName)=>{
    try{
        const {error} = await resend.emails.send({
            from: 'Birthday Notifier <onboarding@resend.dev>', 
            to,
            subject: `🎂 It's ${friendName}'s Birthday Today!`,
            html: `<p>Hi! Just a reminder that it's <strong>${friendName}</strong>'s birthday today! 🎉🎈</p>`,
        })

        if (error) {
            console.error('Resend email error:', error);
          } else {
            console.log(`Email sent to ${to} for ${friendName}'s birthday.`);
          }
    } 
    catch (err) {
        console.error('Unexpected error sending email:', err);
    }
}

module.exports = { sendBirthdayReminder}