import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY missing from .env.local");
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Sanitize & validate inputs
    const name =
      (formData.get("name") || (formData.get("fullName") as string))
        ?.toString()
        .trim()
        .substring(0, 100) || "";
    const email = (formData.get("email") as string)?.trim().toLowerCase() || "";
    const message =
      (formData.get("message") as string)?.trim().substring(0, 2000) || "";
    const jobTitle =
      (formData.get("jobTitle") as string)?.trim().substring(0, 200) ||
      "Contact Form";
    const phone =
      (formData.get("phone") as string)?.trim().substring(0, 20) || "";
    const location =
      (formData.get("location") as string)?.trim().substring(0, 100) || "";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 },
      );
    }

    // File security for resume (career forms)
    const resumeFile = formData.get("resume") as File | null;
    let attachment = null;
    if (resumeFile) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (resumeFile.size > maxSize) {
        return NextResponse.json(
          { success: false, message: "File too large (max 5MB)" },
          { status: 400 },
        );
      }
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { success: false, message: "Invalid file type (PDF/DOC/DOCX)" },
          { status: 400 },
        );
      }

      attachment = {
        filename: resumeFile.name,
        content: Buffer.from(await resumeFile.arrayBuffer()).toString("base64"),
        contentType: resumeFile.type,
      };
    }

    const isJobApplication = !!jobTitle && jobTitle !== "Contact Form";
    const subject = isJobApplication
      ? `New Job Application: ${jobTitle}`
      : "New Contact Inquiry";

    const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
    .container { 1px solid #e2e8f0; max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); overflow: hidden; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 20px; text-align: center; }
    .header h1 { margin: 0 0 8px 0; font-size: 28px; font-weight: 700; }
    .header p { margin: 0; opacity: 0.9; font-size: 16px; }
    .content { padding: 0 20px; }
    .data-table { width: 100%; border-collapse: collapse; margin: 30px 0; background: #f8fafc; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .data-table th { background: #e2e8f0; padding: 18px 20px; text-align: left; font-weight: 600; color: #1e293b; font-size: 15px; border-bottom: 1px solid #e2e8f0; }
    .data-table td { padding: 18px 20px; border-bottom: 1px solid #f1f5f9; color: #475569; font-size: 15px; }
    .data-table tr:hover { background: #f1f5f9; }
    .attachment { background: #dcfce7; border-left: 4px solid #16a34a; padding: 20px; border-radius: 8px; margin: 24px 0; }
    .attachment strong { color: #166534; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; }
    .footer p { margin: 0 0 12px 0; color: #64748b; font-size: 14px; }
    .logo { font-size: 18px; font-weight: 700; color: #1e293b; }
    @media (max-width: 600px) { .container { margin: 10px; border-radius: 12px; } .content { padding: 0px 20px; } .data-table th, .data-table td { padding: 14px 16px; font-size: 14px; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${isJobApplication ? "📄 New Job Application" : "📧 New Contact From"}</h1>
      <p>${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
    </div>
    
    <div class="content">
      <table class="data-table">
        <tr><th>Name</th><td>${name}</td></tr>
        <tr><th>Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
        ${phone ? `<tr><th>Phone</th><td>${phone}</td></tr>` : ""}
        ${location ? `<tr><th>Location</th><td>${location}</td></tr>` : ""}
        ${isJobApplication ? `<tr><th>Job Applied For</th><td><strong>${jobTitle}</strong></td></tr>` : ""}
        <tr><th>Message</th><td>${message.replace(/\n/g, "<br>") || "No message provided"}</td></tr>
      </table>
      
      ${
        attachment
          ? `
        <div class="attachment">
          <strong>📎 Resume Attached:</strong> ${attachment.filename}<br>
          <small>File size: ${(attachment.content.length / 1024 / 1024).toFixed(1)} MB</small>
        </div>`
          : ""
      }
    </div>
    
    <div class="footer">
      <p class="logo">SAP Murthy Training</p>
      <p>Bengaluru, Karnataka | SAP Training &amp; Consulting</p>
      <p><a href="https://murthysaptraining.com" style="color: #3b82f6;">murthysaptraining.com</a></p>
    </div>
  </div>
</body>
</html>`;

    console.log("📧 Attempting to send email...");
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("Form data:", { name, email, phone, message, subject });

    const data = await resend.emails.send({
      from: "Murthy SAP Training <onboarding@resend.dev>", // Use Resend verified domain
      to: ["rakesh9370s@gmail.com"], // Testing - add domain later for multiple recipients
      subject,
      html: htmlTemplate,
      attachments: attachment ? [attachment] : [],
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully!",
    });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
