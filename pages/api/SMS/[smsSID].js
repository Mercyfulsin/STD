const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function handler(req, res) {
  // ===== /api/SMS/[smsSID]?qty=#
  const { query: {smsSID, qty, type, content }, method } = req;



  switch(method){
    case 'GET':
      console.log(type);
      let temp = await client.messages
        .list({ limit: parseInt(qty) });
  
      // ===== /api/SMS/[smsSID]?qty=#&type=id
      if (type === 'id'){
        let SID = [];
        temp.forEach((item) => SID.push(item.sid));
        res.status(200).json(SID);
      } else res.status(200).json(temp);
  
      break;
    case 'POST':
      console.log("POSTING");
      client.messages
      .create({from: process.env.TWILIO_NUMBER_1, body: content, to: process.env.PERSONAL_NUMBER})
      .then(message => console.log(message.sid));
      console.log(`Post smsSID: ${smsSID}`);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break;
  }
}

export default handler