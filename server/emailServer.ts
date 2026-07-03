/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Email sending server using Nodemailer (Express.js)
 * Run: npx tsx server/emailServer.ts
 */

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));
app.use(express.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // true for 465, false for others
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection on startup
transporter.verify((error) => {
  if (error) {
    console.warn("⚠️  Email transporter verification failed:", error.message);
    console.warn("   Email sending will not work until .env is configured correctly.");
  } else {
    console.log("✅ Email transporter is ready.");
  }
});

// POST /api/send-email
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, company, message } = req.body;

    // Validation
    if (!name || !message) {
      return res.status(400).json({
        success: false,
        error: "Name and message are required.",
      });
    }

    const companyInfo = company ? ` (${company})` : "";
    const toEmail = process.env.EMAIL_TO || "surf7978@gmail.com";

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: `[Portfolio] 문의 from ${name}${companyInfo}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fcfcfd; border-radius: 12px; border: 1px solid #e5e7eb;">
          <div style="background: #1E3A5F; color: white; padding: 16px 24px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px -24px;">
            <h2 style="margin: 0; font-size: 16px; font-weight: 600;">📩 새 포트폴리오 문의</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #6b7280; width: 80px; vertical-align: top;">보낸 사람</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1f2937; font-weight: 600;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #6b7280; width: 80px; vertical-align: top;">회사</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1f2937;">${company}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; font-size: 12px; color: #6b7280; width: 80px; vertical-align: top;">시간</td>
              <td style="padding: 8px 0; font-size: 13px; color: #1f2937;">${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 8px 0; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">문의 내용</p>
            <p style="margin: 0; font-size: 13px; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 20px; font-size: 11px; color: #9ca3af; text-align: center;">
            이 메일은 AI Developer Portfolio 연락처 폼을 통해 전송되었습니다.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please check server configuration.",
    });
  }
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`📧 Email server running at http://localhost:${PORT}`);
  console.log(`   API endpoint: POST http://localhost:${PORT}/api/send-email`);
  console.log(`   Health check: GET  http://localhost:${PORT}/api/health`);
});