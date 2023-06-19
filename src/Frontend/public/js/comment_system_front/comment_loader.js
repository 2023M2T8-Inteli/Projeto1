function get_comments() {
	// rel id is the number of the url after the last slash
	// ex: localhost:3000/rels/1, rel id is 1
	const rel_id = window.location.href.split("/").pop();

	const body = {
		"rel_id": rel_id
	}

	fetch("/api/comment_get", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	}).then(response => {
		if (response.status == 200) {
			response.json()
		} else {
			throw new Error("Erro interno do servidor de database")
		}
	}).then(json => {
		return json.data
	}).catch(err => {
		throw err
	});
}

function get_chan_id() {
	fetch(`/api/chan_manager` , {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		response.json()
	}).then(json => {
		return json.chan_id
	}).catch(err => {
		throw err
	});
}

window.onload = () => {
	// gets comments and for each comment, creates a div with the comment content
	// and a delete button if the comment_id is from that same chan_id

	const comments = get_comments();
	let comment_divs = []

	comments.forEach(comment => {
		const comment_div = document.createElement("div");
		comment_div.classList.add("comment");

		const comment_content = document.createElement("p");
		comment_content.classList.add("comment_content");
		comment_content.innerText = comment.content;

		const comment_delete = document.createElement("button");
		comment_delete.classList.add("comment_delete");
		comment_delete.innerText = "Deletar";

		comment_div.appendChild(comment_content);

		if (comment.chan_id == get_chan_id()) {
			comment_div.appendChild(comment_delete);
		}

		document.getElementById("comments").appendChild(comment_div);
	});
}