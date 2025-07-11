import emailjs from "emailjs";

const serviceId = "service_z7v7jmo";
const templateId = "template_9cgo89l";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const response = await emailjs.send(serviceId, templateId, {
      from_name: "Your Name", // Update with the sender's name
      to_email: email,
      subject: subject,
      message: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
