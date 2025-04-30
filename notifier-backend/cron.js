const cron = require('node-cron');
const Birthday = require('./models/birthdayModel');
const User = require('./models/userModel');
const { sendBirthdayReminder } = require('./utils/emailService');


cron.schedule('0 0 * * *', async () => {
  console.log('[CRON] Checking birthdays...');

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  try {
    const birthdays = await Birthday.find().populate('user');

    const todays = birthdays.filter(b => {
      const bd = new Date(b.birthday);
      return bd.getMonth() + 1 === month && bd.getDate() === day;
    });

    for (const b of todays) {
      if (b.user && b.user.email) {
        await sendBirthdayReminder(b.user.email, b.name);
      }
    }

    console.log(`[CRON] Sent ${todays.length} reminders.`);
  } catch (err) {
    console.error('[CRON] Error:', err);
  }
});
