chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create(
	  'index.htm',
	  {id: 'skype', height: 650, width: 1000}
	);
});
