const text = [
  "Aspiring AWS & DevOps Engineer",
  "Cloud Enthusiast",
  "AWS | Docker | Kubernetes",
  "Terraform | Jenkins | Linux"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

function showMessage(){
    alert("Thank you for visiting Anand Singh's Portfolio!");
}