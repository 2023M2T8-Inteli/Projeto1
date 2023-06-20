const { json } = require("body-parser");

const rel_id = window.location.href.split("/").pop();

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

function make_comment(content) {
	const body = {
		"chan_id": get_chan_id(),
		"rel_id": rel_id,
		"content": content
	}

	fetch(`/api/comment_insert`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => {
		if (response.status == 200) {
			return response.json()
		} else {
			throw new Error("Erro interno do servidor de database")
		}
	}).then(json => {
		return json;
	}).catch(err => {
		throw err;
	});
}

function delete_comment(comment_id) {
	$.ajax({
		url: `/api/comment_delete/`,
		type: 'DELETE',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify({"comment_id": comment_id}),
		success: function(response) {
			if (response.status == "success") {
				return response.json()
			} else {
				throw new Error("Erro interno do servidor de database")
			}
		},
		error: function(err) {
			throw err
		}
	});
}

function update_comment(comment_id, content) {
	console.log(comment_id)
	$.ajax({
		url: '/api/comment_update',
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify({"comment_id": comment_id, "content": content}),
		success: function(response) {
			if (response.status == "success") {
				return response
			} else {
				throw new Error("Erro interno do servidor de database")
			}
		},
		error: function(err) {
			throw err
		}
	});
}

function edit_comment(comment_id) {
	// removes attribute "readonly" from element with id "comment_id-textarea"
	document.getElementById(`${comment_id}-textarea`).removeAttribute("readonly");

	// changes button text from "Editar" to "Salvar" (id="comment_id-editbutton")
	document.getElementById(`${comment_id}-editbutton`).innerHTML = "Salvar";

	// changes button onclick function from "edit_comment(comment_id)" to "save_comment(comment_id)"
	document.getElementById(`${comment_id}-editbutton`).setAttribute("onclick", `save_comment(\'${comment_id}\')`);
}

function save_comment(comment_id) {
	// gets content from textarea with id "comment_id-textarea"
	const content = document.getElementById(`${comment_id}-textarea`).value;

	// changes button text from "Salvar" to "Editar" (id="comment_id-editbutton")
	document.getElementById(`${comment_id}-editbutton`).innerHTML = "Editar";

	// changes button onclick function from "save_comment(comment_id)" to "edit_comment(comment_id)"
	document.getElementById(`${comment_id}-editbutton`).setAttribute("onclick", `edit_comment(\'${comment_id}\')`);

	// adds attribute "readonly" to element with id "comment_id-textarea"
	document.getElementById(`${comment_id}-textarea`).setAttribute("readonly", "");

	// calls function "update_comment(comment_id, content)"
	update_comment(comment_id, content);
}

function remove_comment(comment_id) {
	// removes element with id "COMMENT_ID-comment"
	document.getElementById(`${comment_id}-comment`).remove();

	// calls function "delete_comment(comment_id)"
	delete_comment(comment_id);
}