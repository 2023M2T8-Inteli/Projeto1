// whenever the page loads
(() => {
    console.log("insert-favs.js loaded")
    // get the favs from the database
    fetch("/api/seeFav", {
        method: "GET",
        headers: { "Content-Type": "application/json" }

    }).then(response => {
        return response.json()
    }).then(json => {
        console.log(json)

        json.forEach(item => {
            // create a new li
            let newLi = document.createElement("li")
            newLi.className = "nav-item"
            newLi.id = "fav_" + item.rel_num

            // create a new div
            let newDiv = document.createElement("div")
            newDiv.className = "d-flex nav-link justify-content-between remove_link_colour"

            // create a new a
            let newA = document.createElement("a")
            newA.href = "/reports/" + item.rel_num

            let newSpan = document.createElement("span")
            newSpan.setAttribute("data-feather", "file-text");
            newSpan.className = "align-text-bottom me-1"
            newSpan.style = "margin-top: 2.5px"



            let newForm = document.createElement("form")
            newForm.setAttribute("onsubmit", `fetch('/api/deleteFav/${item.rel_num}', { method: 'DELETE' }); document.getElementById("fav_" + ${item.rel_num}).remove(); return false;`);

            let newButton = document.createElement("button")
            newButton.type = "submit"
            newButton.className = "border-0 px-0"
            newButton.style = "background-color: #f8f9fa;"

            let newSpan2 = document.createElement("span")
            newSpan2.setAttribute("data-feather", "minus-circle");
            newSpan2.className = "align-text-bottom ms-auto"
            newSpan2.style = "margin-top: 2.5px"


            newA.appendChild(newSpan)
            newA.innerHTML += " Relatório #" + item.rel_num + " "

            newButton.appendChild(newSpan2)
            newForm.appendChild(newButton)

            newDiv.appendChild(newA)
            newDiv.appendChild(newForm)

            newLi.appendChild(newDiv)
            // append the div to the favs div
            document.getElementById("fav-bar").appendChild(newLi)
        })

        feather.replace()
    }).catch(err => {
        console.log(err)
    })

})();