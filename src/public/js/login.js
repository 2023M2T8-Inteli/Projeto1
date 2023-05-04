form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value,
    }
    fetch('/api/login', {
        method:"POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.status == "error") {
            success.style.display = "none";
            error.style.display = "block";
            error.innerHTML = data.error;
        } else {
            error.style.display = "none";
            success.style.display = "block";
            success.innerHTML = data.success;
            // redirect to home page
            setTimeout(() => {
                window.location.href = "/";
                console.log("redirecting...")
            }, 1000);
        }
    });
});

