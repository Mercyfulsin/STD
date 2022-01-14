async function handler(req, res) {
  // ===== /api/twilio/
  const {
    // query: { smsSID, qty, type },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
        console.log(`Get: ${body}`);
        res.send(200).json({'CheckLogs': 'TRUE'});
      break;
    case "POST":
        console.log(`Post: ${body}`);
        res.send(200).json({'CheckLogs': 'TRUE'});
      break;
    default:
        console.log(`Default: ${body}`);
        res.send(200).json({'CheckLogs': 'TRUE'});
      break;
  }
}
