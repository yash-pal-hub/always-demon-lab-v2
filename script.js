/* PROJECT FORM → WHATSAPP */

const projectForm = document.getElementById("projectForm");
const formMessage = document.getElementById("formMessage");

projectForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(projectForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company") || "Not provided";
  const projectType = formData.get("projectType");
  const description = formData.get("description");
  const budget = formData.get("budget");

  const whatsappMessage =
`🚀 NEW PROJECT INQUIRY — ALWAYS DEMON LABS

👤 Name:
${name}

📧 Email:
${email}

🏢 Business / Company:
${company}

🛠️ Service:
${projectType}

💰 Estimated Budget:
${budget}

📝 Project Details:
${description}

━━━━━━━━━━━━━━━━━━
Sent from Always Demon Labs website`;

  const whatsappURL =
    `https://wa.me/918400776050?text=${encodeURIComponent(whatsappMessage)}`;

  formMessage.style.display = "block";
  formMessage.textContent =
    "Your project details are ready. Opening WhatsApp...";

  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 500);
});
