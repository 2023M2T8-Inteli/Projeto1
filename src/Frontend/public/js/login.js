form.addEventListener('submit', () => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            remember: true // remember.checked
        }),
        headers: {'Content-Type': 'application/json'}
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log(json);
        if (json.status == "success") {
            window.location.href = "/";
        } else {
            alert(json.text);
        }
    }).catch(err => {
        console.log(err);
    });

});