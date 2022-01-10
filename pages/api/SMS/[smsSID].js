const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function handler(req, res) {
  // ===== /api/SMS/[smsSID]?qty=#
  const { smsSID, qty, type } = req.query;

  if (req.method === "GET") {
    console.log(type);
    let temp = await client.messages
      .list({ limit: parseInt(qty) });

    // ===== /api/SMS/[smsSID]?qty=#&type=id
    if (type === 'id'){
      console.log("Following Type ID");
      let SID = [];
      temp.forEach((item) => SID.push(item.sid));
      console.log(SID);
      res.status(200).json(SID);
    }


    res.status(200).json(temp);
  } else if (req.method === "POST") {
    console.log(`Post smsSID: ${smsSID}`);
  }
}

export default handler