function displayElement(elementId, isVisible) {
    var element = document.getElementById(elementId);
    if (isVisible) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

console.log("AA")
// as soon as the page loads, check if the user is logged in
fetch('/api/loggedIn', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.status) {welcome2.innerHTML = `Welcome ${data.user.email}`}
        else {welcome1.innerHTML = `Please Sign In or Register`};

        if (data.status) {log1.style.display = "none"};
        if (data.status) {reg1.style.display = "none"};
        if (data.status) {log2.style.display = "none"};
        if (data.status) {reg2.style.display = "none"};

        if (!data.status) {prof1.style.display = "none"};
        if (!data.status) {logout1.style.display = "none"};
        if (!data.status) {prof2.style.display = "none"};
        if (!data.status) {logout2.style.display = "none"};

        if (data.status) {welcome1.style.display = "none"};
        if (!data.status) {welcome2.style.display = "none"};
    })
