/* script.js */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});


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

/* MEETING CONFIRMATION */

const meetingConfirm = document.getElementById("meetingConfirm");
const meetingMessage = document.getElementById("meetingMessage");
const meetingTime = document.getElementById("meetingTime");

meetingConfirm.addEventListener("click", () => {

  const selectedType =
    document.querySelector(".meeting-type.active strong").textContent;

  const duration =
    document.querySelector(".meeting-type.active").dataset.duration;

  const date = meetingDate.value;
  const time = meetingTime.value;

  if (!date || !time) {
    meetingMessage.style.display = "block";
    meetingMessage.textContent =
      "Please select both a date and time.";
    return;
  }

  const formattedDate =
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

  const subject = encodeURIComponent(
    `Meeting Request — ${selectedType}`
  );

  const body = encodeURIComponent(
`Meeting request

Meeting type: ${selectedType}
Duration: ${duration}
Preferred date: ${formattedDate}
Preferred time: ${time}

Please confirm the meeting availability.`
  );

  meetingMessage.style.display = "block";

  meetingMessage.innerHTML =
    `Meeting request prepared for <strong>${formattedDate}</strong> at <strong>${time}</strong>.<br>
    Opening email to complete the request...`;

  setTimeout(() => {
    window.location.href =
      `mailto:Alwaysdemonyash@gmail.com?subject=${subject}&body=${body}`;
  }, 700);
});


/* CURRENT YEAR */

document.getElementById("year").textContent =
  new Date().getFullYear();
