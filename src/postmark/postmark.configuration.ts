export default () => ({
    apiKey: process.env.POSTMARK_APIKEY,
    greetingEmail: process.env.GREETING_EMAIL_ADDRESS,
    recipientEmail: process.env.RECIPIENT_EMAIL,
    recipientName: process.env.RECIPIENT_NAME,
    recipientID: process.env.RECIPIENT_ID,
    emailContent: `
Hello {{=it.username}}, <br>

<br>

Welcome to Ampwise! We're excited to have you on board. <br>

<br>
As a token of our warm welcome, here's a welcome e-mail! <br>

<br>

This e-mail was meant for: <br>
User ID: {{=it.userId}} <br>
Email: {{=it.email}} <br>

<br>

Thank you for choosing Ampwise. <br>

<br>

Best regards, <br>
The Ampwise Team <br>
Email: {{=it.timeSent}}
`
});
