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
    const ping = await client.ping.get();
    console.log(ping);
    const response = await client.lists.addListMember(LIST_ID, {
      email_address: email,
      status: 'pending',
      skip_merge_validation: true,
    });
    await console.log('***API CALL***');
    await console.log(response);
    if (response.status >= 400) {
      console.log('***RES ERROR***');
      return res.status(response.status).json({
        status: response.status,
        message: '***RES ERROR',
      });
    }
  } catch (err) {
    await console.log('***ERROR***');
    await console.log('err.status: ', err.status);
    return res.status(400).json({
      message: '***STATUS***ERROR***',
    });
  }
  await console.log('***SUCCESS***');
  await console.log(res);
  return res.status(201).json({
    message: '***STATUS***SUCCESS***',
  });
};

export default handler;

// export default function handler(req, res) {
//   const { email } = req.body;
//   console.log(`email: ${email}`);

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   const client = require('@mailchimp/mailchimp_marketing');

//   const API_KEY = process.env.MAILCHIMP_API_KEY;
//   const API_SERVER = process.env.MAILCHIMP_API_SERVER;
//   const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;

//   client.setConfig({
//     apiKey: API_KEY,
//     server: API_SERVER,
//   });

//   const run = async () => {
//     try {
//       const ping = await client.ping.get();
//       console.log(ping);
//       const response = await client.lists.addListMember(LIST_ID, {
//         email_address: email,
//         status: 'pending',
//         skip_merge_validation: true,
//       });
//       console.log(response);

//       return res.status(201).json({
//         message:
//           'Your email address has been successfully added to the mailing list',
//       });
//     } catch (error) {
//       console.error(error);
//       if (error.status >= 400) {
//         console.log('***ERROR***');
//         return res.status(400).json({
//           error: `There was an error subscribing your email address to the newsletter.
//             Please contact us directly so we can add you in manually. Sorry for any inconvenience.`,
//         });
//       }
//       return res.status(500).json({ error: error.message || error.toString() });
//     }
//   };
//   run().then((response) => console.log('response: ', { response }));
// }
//   const run = async () => {
//     const response = await client.lists.addListMember(LIST_ID, {
//       email_address: `${email}`,
//       status: 'pending',
//       skip_merge_validation: true,
//     });
//     run();

//     return res.status(201).json({
//       message: 'Success! 🎉 You are now subscribed to the newsletter.',
//     });
//   };
// } catch (err) {
//   console.log(err);
//   return res.status(500).json({ error: err });
// }
// }
