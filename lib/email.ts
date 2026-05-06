import sgMail from "@sendgrid/mail";

/**
 * Email utility for sending emails via SendGrid
 *
 * Configuration:
 * - API Key: SENDGRID_API_KEY environment variable
 * - From Email: SENDGRID_FROM_EMAIL environment variable
 *
 * Error Handling:
 * - Errors are logged but don't throw (fire-and-forget pattern)
 * - Form submissions succeed even if email sending fails
 * - Failures are logged for debugging and monitoring
 */

// Initialize SendGrid with API key
const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
}

interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  from?: string;
}

/**
 * Send email via SendGrid
 *
 * This is a fire-and-forget function: it sends the email asynchronously
 * but doesn't block the caller. Errors are logged but not thrown.
 *
 * @param to - Recipient email address
 * @param subject - Email subject line
 * @param text - Email body (plain text)
 * @param from - Sender email address (optional, defaults to env SENDGRID_FROM_EMAIL)
 *
 * @returns Promise that resolves when SendGrid responds (may resolve before delivery)
 */
export async function sendEmail(payload: EmailPayload): Promise<void> {
  const { to, subject, text, from = process.env.SENDGRID_FROM_EMAIL || "galleria@thedoghouseps.com" } = payload;

  // Guard: SendGrid not configured
  if (!apiKey) {
    console.warn("[email] SendGrid API key not configured. Email would be:", {
      to,
      subject,
      from,
      textLength: text.length,
    });
    return;
  }

  try {
    await sgMail.send({
      to,
      from,
      subject,
      text,
    });
    console.log(`[email] Email sent successfully to ${to} - ${subject}`);
  } catch (error) {
    // Log the error but don't throw - this is fire-and-forget
    console.error("[email] Failed to send email:", {
      to,
      subject,
      error: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Send multiple emails in parallel (fire-and-forget)
 *
 * All emails are sent asynchronously. Individual failures don't prevent
 * other emails from being sent.
 *
 * @param emails - Array of email payloads
 * @returns Promise that resolves when all SendGrid requests complete
 */
export async function sendEmails(emails: EmailPayload[]): Promise<void> {
  if (!apiKey) {
    console.warn("[email] SendGrid API key not configured. Would send", emails.length, "emails");
    return;
  }

  try {
    await Promise.all(emails.map((email) => sendEmail(email)));
  } catch (error) {
    // Promise.all with individual error handling - this shouldn't throw
    // since sendEmail() catches its own errors, but we handle it defensively
    console.error("[email] Error during batch email sending:", error);
  }
}
