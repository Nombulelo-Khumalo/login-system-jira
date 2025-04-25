document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation (just for demonstration)
  if(username === 'admin' && password === 'password123') {
    alert('Login successful!');
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

