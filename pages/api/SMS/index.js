// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  