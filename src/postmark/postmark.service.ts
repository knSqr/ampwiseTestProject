import { Injectable } from '@nestjs/common';
const postmark = require("postmark");
const dot = require('dot');
const { IsNotEmpty, IsString, validateOrReject } = require('class-validator');

class AppConfig {
    @IsNotEmpty()
    @IsString()
    APIKEY;
    GE_ADRRESS;
    R_EMAIL;
    R_NAME;
    R_ID;
}

// Define your email template
const emailTemplate = `
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
`;

@Injectable()
export class PostmarkService {

    async greetCustomerEmail(POSTMARK_APIKEY, GREETING_EMAIL_ADDRESS, RECIPIENT_EMAIL, RECIPIENT_NAME, RECIPIENT_ID): Promise<string> {



        const config = new AppConfig();
        config.APIKEY = POSTMARK_APIKEY;
        config.GE_ADRRESS = GREETING_EMAIL_ADDRESS;
        config.R_EMAIL = RECIPIENT_EMAIL;
        config.R_NAME = RECIPIENT_NAME;
        config.R_ID = RECIPIENT_ID;

        let error: boolean;
        // Validate and reject if there are errors
        await validateOrReject(config)
            .then(async () => {
                // Configuration is valid, proceed with sending the e-mail
                // Get the postmark api key from ENV.
                var client = new postmark.ServerClient(process.env.POSTMARK_APIKEY);

                // Some logic to determine a recipient's email (e.g. from a form) (currently an env)
                let recipient_determined_at_runtime: string = RECIPIENT_EMAIL;

                // Get current time
                const currentTimeSinceEpoch = new Date().getTime();
                const humanReadableTime = new Date(currentTimeSinceEpoch).toLocaleString();

                // Compile the template
                const compiledTemplate = dot.template(emailTemplate);

                // Example data (replace this with your actual data)
                const templateData = {
                    username: RECIPIENT_NAME,
                    userId: RECIPIENT_ID,
                    email: recipient_determined_at_runtime,
                    timeSent: humanReadableTime,
                };

                // Render the template with data
                const renderedEmail = compiledTemplate(templateData);

                // Send the email
                await client.sendEmail({
                    'From': GREETING_EMAIL_ADDRESS,
                    'To': recipient_determined_at_runtime,
                    'Subject': 'Ampwise test',
                    'HtmlBody': renderedEmail
                })

                // Console log it for dev purposes
                console.log(`E-mail to ${recipient_determined_at_runtime} sent successfully`)

                error = false;
            })
            .catch(errors => {
                error = true;
                console.error('Configuration validation failed:', errors);


            });

        // End call
        if (error) {
            return 'Got an error, some of the envs are not up to standards';
        } else {
            return `E-mail sent successfully`;
        }




    }
    test(): string {
        return 'merry christmas';
    }
}
