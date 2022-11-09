export default function handler(req, res) {
  const { email } = req.body;

  console.log(`email: ${email}`);

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
        status_if_new: 'pending',
        status: 'subscribed',
        skip_merge_validation: true,
      }
    );
    console.log(response);
  };

  run();
}
