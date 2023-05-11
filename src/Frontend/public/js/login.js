form.addEventListener('submit', () => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            remember: remember.checked
        }),
        headers: {'Content-Type': 'application/json'}
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        if (data.status == "success") {
            location.assign('/');
        } else {
            alert(data.text);
        }
    }).catch(err => {
        console.log(err);
    });

});