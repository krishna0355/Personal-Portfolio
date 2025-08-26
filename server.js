// server.js
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const SibApiV3Sdk = require("@sendinblue/client");

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // later restrict to your domain
app.use(express.json());

// --- Brevo (Sendinblue) setup ---
const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
brevo.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// --- Contact form route ---
app.post("/api/contact", async (req, res) => {
  try {
    console.log("📩 Incoming request body:", req.body);

    const { firstName, lastName, email, phone, message } = req.body || {};
    if (!firstName || !lastName || !email || !message) {
      console.warn("⚠️ Missing required fields:", req.body);
      return res.status(400).json({ code: 400, status: "Bad Request" });
    }

    const name = `${firstName} ${lastName}`;

    // Sender must be from your verified Brevo domain
    const sendSmtpEmail = {
      sender: { email: "krishnakumaragarwal99@gmail.com", name: "Portfolio Contact" },
      to: [{ email: process.env.EMAIL_TO }],
      subject: `Portfolio Contact Form - ${name}`,
      htmlContent: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: { email, name }, // lets you reply directly to sender
    };

    console.log("📤 Sending email via Brevo:", sendSmtpEmail);

    const response = await brevo.sendTransacEmail(sendSmtpEmail);

    console.log("✅ Email sent successfully. Brevo response:", response);
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("❌ Email send error:", error.response?.body || error.message);
    res.status(500).json({
      code: 500,
      status: "Message Failed",
      error: error.response?.body || error.message,
    });
  }
});

// --- Serve React build ---
const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

// Let React handle any other route (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// --- Start server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
