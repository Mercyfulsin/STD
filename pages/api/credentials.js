// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let credObj = {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_NUMBER_1: process.env.TWILIO_NUMBER_1,
    TWILIO_MESSAGING_SERVICE_SID: process.env.TWILIO_MESSAGING_SERVICE_SID
  };
  export default function credentialsAPI(req, res) {
    res.status(200).json(credObj);
  }  