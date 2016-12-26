function load_list() {
	// Загружаем сохраненное время "последней загрузки списка"
	chrome.storage.sync.get('last_load_time', 
		function(retVal) {
			var now = Date.now();
			// Если время последней загрузки не указано, или с последней загрузки прошло больше часа
			if ((typeof retVal.last_load_time === 'undefined')||((now-retVal.last_load_time)>1000000)) { //3600000
				// Загружаем список
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://www.softomate.net/ext/employees/list.json", true);
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						// Сохраняем список
						chrome.storage.sync.set({'domain_list': xhr.responseText}, function() {});
						// Сохраняем новое время последней загрузки списка
						chrome.storage.sync.set({'last_load_time': now}, function() {});
					}
				}
				xhr.send();
			}
		}
	);
}