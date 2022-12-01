const handler = async (req, res) => {
  const { email } = req.body;
  console.log(`email: ${email}`);

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const client = require('@mailchimp/mailchimp_marketing');

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  client.setConfig({
    apiKey: API_KEY,
    server: API_SERVER,
  });

  try {
    const response = await client.lists.addListMember(LIST_ID, {
      email_address: email,
      status: 'pending',
      skip_merge_validation: true,
    });
  } catch (err) {
    if (err.status >= 400) {
      return res.status(400).json({
        status: 400,
        error: '***STATUS 400 ERROR***',
      });
    }
    return res.status(500).json({
      status: 500,
      error: '***STATUS 500 ERROR***',
    });
  }

  return res.status(201).json({
    status: 201,
    error: '',
    message: '***RES SUCCESS***',
  });
};

export default handler;
