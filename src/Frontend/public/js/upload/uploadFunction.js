//gerando icone de upload de acordo com o login(apenas para admins)
window.onload = async function() {
    console.log("Loading upload button")

    const user = await fetch('/api/get_user', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        if (response.status == 200) {
            return response.json()
        } else {
            return null
        }
    }).then(json => {
        if (json != null) {
            return json['user']
        }
    }).then(user => {
        console.log(user.username)
        if(user.username == "admin"){
            permission = true
            let upload = document.createElement('li')
            upload.setAttribute('class', 'nav-item')
            upload.setAttribute('id', 'upload')

            let link = document.createElement('a')
            link.setAttribute('class', 'nav-link')
            link.setAttribute('href', '/upload')

            let span = document.createElement('span');
            span.setAttribute('data-feather', 'upload');
            span.setAttribute('class', 'align-text-bottom');

            const ul = document.querySelector('ul');
            ul.appendChild(upload).appendChild(link).appendChild(span);
            link.innerHTML += " Upload"
        }
    })
}

async function upload() {

    const user = await fetch('/api/get_user', {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        if (response.status == 200) {
            return response.json()
        } else {
            return null
        }
    }).then(json => {
        if (json != null) {
            return json['user']
        }
    }).then(user => {
        console.log(user.username)
        if(user.username == "admin"){
            console.log("Uploading file")
            const fileInput = document.querySelector('input[type="file"]');
            const formData = new FormData();
            formData.append('file', fileInput.files[0])

            
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/uploadRel', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('File(s) uploaded successfully!');
                    if (xhr.responseText != "1") {
                        alert('Dado não inserido');
                    } else {
                        alert('Dado inserido');
                    }

                } else {
                    console.log('An error occurred!');
                }
            };
            xhr.send(formData);
        }
    
    })
}