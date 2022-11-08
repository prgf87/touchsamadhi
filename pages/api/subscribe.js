import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
// /* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios';

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email || !email.length) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   const API_KEY = process.env.MAILCHIMP_API_KEY;
//   const API_SERVER = process.env.MAILCHIMP_API_SERVER;
//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

//   const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

//   const data = {
//     email_address: email,
//     status: 'subscribed',
//   };

//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `api_key ${API_KEY}`,
//     },
//   };

//   try {
//     const response = await axios.post(url, data, options);
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`,
//       });
//     }
//     return res.status(201).json({ message: 'success' });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }
// };

// import mailchimp from '@mailchimp/mailchimp_marketing';

// async function handler(req, res) {
//   const { email, status, merge_fields } = req.body;

//   console.log({ email });

//   mailchimp.setConfig({
//     apiKey: process.env.MAILCHIMP_API_KEY,
//     server: process.env.MAILCHIMP_API_SERVER,
//   });

//   try {
//     await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
//       email,
//       status,
//       merge_fields,
//     });
//   } catch (err) {
//     return res.status(400).send({ error: true });
//   }

//   return res.json({ success: true });
// }

// export default handler;

// import fetch from 'isomorphic-unfetch';

// async function handler(req, res) {
//   const { email } = req.body;

//   console.log({ email });

//   if (!email) {
//     return res.status(400).json({ error: '*** Email is required ***' });
//   }

//   try {
//     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
//     const API_KEY = process.env.MAILCHIMP_API_KEY;
//     const DATACENTER = process.env.MAILCHIMP_API_SERVER;
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     };
//     const response = await fetch(
//       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
//       {
//         body: JSON.stringify(data),
//         headers: {
//           Authorization: `apikey ${API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//       }
//     );

//     if (response.status >= 400) {
//       return res.status(400).json({
//         error:
//           'There was an error subscribing to the newsletter, please try again with a different email address.',
//       });
//     }
//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// }

// export default handler;

// import axios from 'axios';

// export default async (req, res) => {
//   const { email } = req.body;

//   if (!email || !email.length) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   const API_KEY = process.env.MAILCHIMP_API_KEY;
//   const API_SERVER = process.env.MAILCHIMP_API_SERVER;
//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

//   const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

//   const data = {
//     email_address: email,
//     status: 'subscribed',
//   };

//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `api_key ${API_KEY}`,
//     },
//   };

//   try {
//     const response = await axios.post(url, data, options);
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`,
//       });
//     }
//     return res.status(201).json({ message: 'success' });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }
// };
// import fetch from 'isomorphic-unfetch';

// const handler = async (req, res) => {
//   const { email } = req.body;

//   console.log({ email });

//   if (!email) {
//     return res.status(200).json({ error: '*** Email is required ***' });
//   }

//   try {
//     const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
//     const API_KEY = process.env.MAILCHIMP_API_KEY;
//     const DATACENTER = process.env.MAILCHIMP_API_SERVER;
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     };

//     const response = await fetch(
//       `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

//       {
//         body: JSON.stringify(data),
//         headers: {
//           Authorization: `apikey ${API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         method: 'POST',
//       }
//     );

//     if (response.status >= 400) {
//       return res.status(400).json({
//         error:
//           'There was an error subscribing to the newsletter, please try again with a different email address.',
//       });
//     }
//     return res.status(201).json({ error: '' });
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
// };

// export default handler;
