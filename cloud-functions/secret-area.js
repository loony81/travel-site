exports.handler = function(event, context, callback) {
	const secretContent = `
	<h3>Welcome to the Secret Area</h3>
	<p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four<p>
	`
	let body 
	event.body ? body = JSON.parse(event.body) : body = {}
	if(body.password == 'javascript'){
		callback(null, {
			statusCode: 200,
			body: secretContent
		})
	} else {
		callback(null, {
			statusCode: 401
		})
	}
}