import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    console.log("------------------- CONTACT FORM SUBMISSION -------------------");
    console.log(`From: ${name} <${email}>`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------------------------------------");

    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['rimshashafique1997@gmail.com'],
          subject: `Contact Form: ${subject}`,
          html: `
            <h3>New Message from Portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });

        if (error) {
          console.error("Resend Error:", error);
          return res.status(500).json({ success: false, error: error.message });
        }
        console.log("Email sent successfully via Resend:", data);
        return res.status(200).json({ success: true, message: "Email dispatched successfully." });
      } catch (err: any) {
        console.error("Mail Dispatch Failed:", err);
        return res.status(500).json({ success: false, error: err.message });
      }
    } else {
      console.warn("RESEND_API_KEY is missing. Email logged to console only.");
      return res.status(200).json({ 
        success: true, 
        message: "Email received (running in development mode without API key)." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
