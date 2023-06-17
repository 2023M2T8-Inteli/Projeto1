console.log("chan_manager.js loaded")
fetch(`/api/chan_manager` , {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
}).then(
	response => response.json()
).then(data => {
	console.log(data)
})

console.log("chan_manager.js loaded")
