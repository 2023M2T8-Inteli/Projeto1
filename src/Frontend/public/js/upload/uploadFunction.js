//gerando icone de upload de acordo com o login(apenas para admins)
let permission = false

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
            let upload = document.createElement('a')
            upload.setAttribute('href', '/upload')
            upload.setAttribute('class', 'upload')

            let image = document.createElement('img');
            image.setAttribute('src', './assets/upload.svg');
            image.setAttribute('width', '50px');
            image.setAttribute('height', '50px');

            const header = document.querySelector('header');
            header.appendChild(upload).appendChild(image);
            permission = true
        }
    })
}

function upload() {
    if(permission){
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
}