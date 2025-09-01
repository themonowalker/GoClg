document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const role = document.getElementById("role").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("loginMessage");

      if (email && password && role) {
        message.style.color = "green";
        message.textContent = `✅ Logged in successfully as ${role}`;
      } else {
        message.style.color = "red";
        message.textContent = "⚠️ Please fill in all fields.";
      }
    });
  }
});
