export default () => ({
    apiKey: process.env.POSTMARK_APIKEY,
    greetingEmail: process.env.GREETING_EMAIL_ADDRESS,
    recipientEmail: process.env.RECIPIENT_EMAIL,
    recipientName: process.env.RECIPIENT_NAME,
    recipientID: process.env.RECIPIENT_ID
});
