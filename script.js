/* =========================================
   MEETING BOOKING → WHATSAPP
========================================= */

const meetingTypes = document.querySelectorAll(".meeting-type");
const meetingConfirm = document.getElementById("meetingConfirm");
const meetingSuccess = document.getElementById("meetingSuccess");

const meetingName = document.getElementById("meetingName");
const meetingEmail = document.getElementById("meetingEmail");
const meetingCompany = document.getElementById("meetingCompany");
const meetingDate = document.getElementById("meetingDate");
const meetingTime = document.getElementById("meetingTime");
const meetingTopic = document.getElementById("meetingTopic");


/* SELECT MEETING TYPE */

meetingTypes.forEach(type => {

  type.addEventListener("click", () => {

    meetingTypes.forEach(item => {
      item.classList.remove("active");
    });

    type.classList.add("active");

  });

});


/* PREVENT PAST DATES */

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

meetingDate.min = `${year}-${month}-${day}`;


/* CONFIRM MEETING */

meetingConfirm.addEventListener("click", () => {

  /* CUSTOMER DETAILS */

  const name = meetingName.value.trim();
  const email = meetingEmail.value.trim();
  const company = meetingCompany.value.trim() || "Not provided";

  /* MEETING DETAILS */

  const date = meetingDate.value;
  const time = meetingTime.value;
  const topic = meetingTopic.value.trim() || "Not provided";

  /* SELECTED MEETING TYPE */

  const selectedMeeting =
    document.querySelector(".meeting-type.active");

  const meetingType =
    selectedMeeting.dataset.type;

  const duration =
    selectedMeeting.dataset.duration;


  /* VALIDATION */

  if (!name) {

    showMeetingError("Please enter your name.");
    meetingName.focus();

    return;
  }


  if (!email) {

    showMeetingError("Please enter your email.");
    meetingEmail.focus();

    return;
  }


  if (!isValidEmail(email)) {

    showMeetingError("Please enter a valid email address.");
    meetingEmail.focus();

    return;
  }


  if (!date) {

    showMeetingError("Please select a meeting date.");
    meetingDate.focus();

    return;
  }


  if (!time) {

    showMeetingError("Please select a meeting time.");
    meetingTime.focus();

    return;
  }


  /* FORMAT DATE */

  const formattedDate =
    new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );


  /* WHATSAPP MESSAGE */

  const whatsappMessage =
`📅 MEETING REQUEST — ALWAYS DEMON LABS

👤 Customer Name:
${name}

📧 Email:
${email}

🏢 Business / Company:
${company}

━━━━━━━━━━━━━━━━━━

📌 Meeting Type:
${meetingType}

⏱️ Duration:
${duration}

📆 Preferred Date:
${formattedDate}

🕐 Preferred Time:
${time}

━━━━━━━━━━━━━━━━━━

📝 Discussion / Project Details:
${topic}

━━━━━━━━━━━━━━━━━━

Hello Always Demon Labs,
I would like to schedule this meeting.

Please confirm the availability.

Thank you.`;


  /* WHATSAPP URL */

  const whatsappURL =
    `https://wa.me/918400776050?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  /* SUCCESS MESSAGE */

  meetingSuccess.style.display = "block";

  meetingSuccess.innerHTML =
    `Meeting details prepared successfully.<br>
     Opening WhatsApp...`;


  /* OPEN WHATSAPP */

  setTimeout(() => {

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  }, 700);

});


/* EMAIL VALIDATION */

function isValidEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


/* ERROR MESSAGE */

function showMeetingError(message) {

  meetingSuccess.style.display = "block";

  meetingSuccess.style.borderColor = "#ff5555";

  meetingSuccess.style.color = "#ff5555";

  meetingSuccess.textContent = message;

}

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
