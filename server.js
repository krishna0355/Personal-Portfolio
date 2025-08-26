require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const SibApiV3Sdk = require('@sendinblue/client');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("✅ Server Running on port 5000"));

// Initialize Brevo
let brevo = new SibApiV3Sdk.TransactionalEmailsApi();
brevo.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Contact form route
router.post("/contact", async (req, res) => {
  try {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const sendSmtpEmail = {
      sender: { email: email, name: name },
      to: [{ email: process.env.EMAIL_TO }],
      subject: "Contact Form Submission - Portfolio",
      htmlContent: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await brevo.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully");
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({ code: 500, status: "Message Failed", error });
  }
});
