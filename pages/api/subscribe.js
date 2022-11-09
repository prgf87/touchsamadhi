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
      const ping = await client.ping.get();
      console.log(ping);
      const response = await client.lists.setListMember(
        LIST_ID,
        'subscriber_hash',
        {
          email_address: email,
          status_if_new: 'subscribed',
          status: 'subscribed',
          skip_merge_validation: true,
        }
      );
      console.log(response);
      if (response.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing your email address to the newsletter.
          Please contact us directly at touchsamadhi@gmail.com so we can add you in manually. Sorry for any inconvenience.`,
        });
      }
    };
    run();
    return res
      .status(201)
      .json({ error: 'Email address has been added to the mailing list' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
