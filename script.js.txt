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


/* PROJECT FORM */

const projectForm = document.getElementById("projectForm");
const formMessage = document.getElementById("formMessage");

projectForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(projectForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const projectType = formData.get("projectType");
  const description = formData.get("description");
  const budget = formData.get("budget");

  const subject = encodeURIComponent(
    `New Project Inquiry — ${projectType}`
  );

  const body = encodeURIComponent(
`New project inquiry

Name: ${name}
Email: ${email}
Business / Company: ${company || "Not provided"}
Service: ${projectType}
Budget: ${budget}

Project details:
${description}`
  );

  const mailtoURL =
    `mailto:Alwaysdemonyash@gmail.com?subject=${subject}&body=${body}`;

  formMessage.style.display = "block";
  formMessage.textContent =
    "Your inquiry is ready. Opening your email client...";

  window.location.href = mailtoURL;
});


/* MEETING TYPE */

const meetingTypes = document.querySelectorAll(".meeting-type");

meetingTypes.forEach(type => {
  type.addEventListener("click", () => {

    meetingTypes.forEach(item => {
      item.classList.remove("active");
    });

    type.classList.add("active");
  });
});


/* DATE MINIMUM */

const meetingDate = document.getElementById("meetingDate");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

meetingDate.min = `${year}-${month}-${day}`;


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