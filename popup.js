var link_list = document.getElementById('link_list');
link_list.innerHTML = '<ul>';
// Берем сохраненный список
chrome.storage.sync.get('domain_list', 
	function(retVal) {
		// И выводим его
		var list = JSON.parse(retVal.domain_list);
		list.forEach(
			function(object) {
				link_list.innerHTML += '<li><a href="http://'+object.domain+'">'+object.name+'</a></li>';
			}
		);
		link_list.innerHTML += '<ul>';
	}
);