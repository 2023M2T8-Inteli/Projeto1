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
	fetch(`/api/comment_delete/`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({"comment_id": comment_id})
	}).then(response => {
		if (response.status == 200) {
			return response.json()
		} else {
			throw new Error("Erro interno do servidor de database")
		}
	}).then(json => {
		return json
	}).catch(err => {
		throw err
	});
}

function update_comment(comment_id, content) {
	fetch(`/api/comment_update/`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({"comment_id": comment_id, "content": content})
	}).then(response => {
		if (response.status == 200) {
			return response.json()
		} else {
			throw new Error("Erro interno do servidor de database")
		}
	}).then(json => {
		return json
	}).catch(err => {
		throw err
	});
}