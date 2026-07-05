/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Vercel Serverless Function for sending emails via Nodemailer
 * 
 * Endpoint: POST /api/send-email
 */

import express from "express";
import nodemailer from "nodemailer";

const app = express();

// Parse JSON body
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

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
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS not configured in environment variables");
      return res.status(500).json({
        success: false,
        error: "Email service is not configured properly.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
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
      error: "Failed to send email. Please try again later.",
    });
  }
});

// Handle OPTIONS (CORS preflight)
app.options("/api/send-email", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

export default app;