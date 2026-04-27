function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

// Login with admin option
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.toLowerCase();
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "admin123") {
    alert("Admin access granted!");
    showScreen('admin');
  } else {
    alert(`Welcome, ${username}!`);
    showScreen('greeting');
  }
}

// Greeting
function setMood(mood) {
  document.getElementById('mood-result').textContent = `You feel ${mood} today.`;
}

// Attendance
function markPresent(button) {
  button.parentElement.innerHTML = button.parentElement.textContent + " ✅";
  updateReport();
}

// Report with circular chart
function updateReport() {
  const total = document.querySelectorAll('#attendance-list li').length;
  const present = document.querySelectorAll('#attendance-list li').length - 
                  document.querySelectorAll('#attendance-list li button').length;
  const percent = Math.round((present / total) * 100);
  document.getElementById('report-text').textContent = `${percent}% TOTAL PRESENT`;

  const canvas = document.getElementById('report-chart');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw circle background
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI); }