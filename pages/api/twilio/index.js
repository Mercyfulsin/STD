export default function handler(req, res) {
  // ===== /api/twilio/
  const {
    // query: { smsSID, qty, type },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
        console.log(`Get: ${body}`);
        res.status(200).json({'CheckLogs': 'TRUE'});
      break;
    case "POST":
        
        console.log(req.body);
        
        res.status(200).json({ 'SMS_SID': req.body.SmsSid });
      break;
    default:
        console.log(`Default: ${body}`);
        res.status(200).json({'CheckLogs': 'TRUE'});
      break;
  }
};
