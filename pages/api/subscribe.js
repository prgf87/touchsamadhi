export default function handler(req, res) {
  const { email } = req.body;
  console.log(`email: ${email}`);

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const client = require('@mailchimp/mailchimp_marketing');

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    client.setConfig({
      apiKey: API_KEY,
      server: API_SERVER,
    });

    const run = async () => {
      const response = await client.lists.addListMember(LIST_ID, {
        email_address: `${email}`,
        status: 'pending',
        skip_merge_validation: true,
      });
      console.log(response);
    };
    run();
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing your email address to the newsletter.
        Please contact us directly so we can add you in manually. Sorry for any inconvenience.`,
      });
    } else {
      return res.status(201).json({
        error: 'Success! 🎉 You are now subscribed to the newsletter.',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: '***ERROR***' });
  }
}
