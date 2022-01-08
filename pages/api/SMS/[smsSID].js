const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default function handler(req,res) {
    // ===== /api/SMS/[smsSID]?qty=#
    const { smsSID, qty } = req.query;

    if (req.method === 'GET'){
        res.status(200).json({ SID: smsSID, QTY: qty });
    }
    else if (req.method === 'POST'){
        console.log(`Post smsSID: ${smsSID}`);
    }
}