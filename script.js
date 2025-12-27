// Login form validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const rollNumber = document.getElementById('rollNumber').value.trim();
            const dob = document.getElementById('dob').value.trim();
            
            // Hardcoded validation
            const validRollNumber = 'NOP19952675223';
            const validDOB = '18/09/2003';
            
            // Check credentials
            if (rollNumber === validRollNumber && dob === validDOB) {
                // Redirect to result page
                window.location.href = 'result.html';
            } else {
                // Show error message
                errorMessage.textContent = 'Invalid credentials. Please check your Roll Number and Date of Birth.';
                errorMessage.classList.add('show');
            }
        });
    }
});

