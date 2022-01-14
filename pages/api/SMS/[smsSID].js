const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function handler(req, res) {
  // ===== /api/SMS/[smsSID]?qty=#
  const {
    query: { smsSID, qty, type },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
      console.log(type);
      let temp = await client.messages.list({ limit: parseInt(qty) });

      // ===== /api/SMS/[smsSID]?qty=#&type=id
      if (type === "id") {
        let SID = [];
        temp.forEach((item) => SID.push(item.sid));
        res.status(200).json(SID);
      } else res.status(200).json(temp);

      break;
    case "POST":
      console.log("POSTING");
      console.log(`smsSID: ${smsSID} qty: ${qty} type: ${type} content:${body}`);
      if (type === "send") {
        const sms = await client.messages
          .create({
            from: process.env.TWILIO_NUMBER_1,
            body: body,
            to: process.env.PERSONAL_NUMBER,
          })
          .then((message) => res.send(200).json(message.sid));
        console.log(`Post smsSID: ${sms}`);
      } else {
        res.send(404).json({'Error': 'Something went wrong.'});
      }
      console.log("Ending POST");
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

export default handler;
