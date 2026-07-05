// Test script to send email via Vercel API
const res = await fetch("https://ai-developer-portfolio-kappa.vercel.app/api/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Test User",
    company: "Test Company",
    message: "This is a test message from the portfolio contact form."
  })
});

const data = await res.json();
console.log("Status:", res.status);
console.log("Response:", JSON.stringify(data, null, 2));