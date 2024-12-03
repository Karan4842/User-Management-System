document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Input Fields
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    // Validate Email
    if (!email.value || !email.value.includes("@")) {
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    // Validate Password
    if (!password.value) {
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    if (isValid) {
        alert("Login successful!");
        // Redirect to dashboard or another page
    }
});
