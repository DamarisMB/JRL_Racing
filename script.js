function showMeasurementForm() {
    document.getElementById("measurement-form").classList.remove("hidden");
  }
  
  // Handle form submission for custom jackets
  document.getElementById("jacketForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your custom jacket order has been submitted! We’ll contact you soon.");
    document.getElementById("jacketForm").reset();
    document.getElementById("measurement-form").classList.add("hidden");
  });
  
  // Handle form submission for the contact form
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you shortly.");
    document.getElementById("contactForm").reset();
  });