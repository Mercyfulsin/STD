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
        console.log(`Ended POST ${req.body.SmsSid}`);
        console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
        
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end('<Response></Response>');
      break;
    default:
        console.log(`Default: ${body}`);
        res.status(200).json({'CheckLogs': 'TRUE'});
      break;
  }
};
