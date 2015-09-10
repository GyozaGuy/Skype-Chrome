chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.htm', {
		bounds: {
			height: 650,
			width: 1000
		}
	});
});