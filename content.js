var host = window.location.hostname;
// Берем сохраненны список
chrome.storage.sync.get('domain_list', 
	function(retVal) {
		var list = JSON.parse(retVal.domain_list);
		list.forEach(
			// Проверяем на соответствие открытой странице (2 варианта)
			function(object) {
				// Для "строгой" проверки соответствия, без учета субдоменов кроме "www"
				//if((host==object.domain)||(host==('www.'+object.domain))) { 
				// ----- ИЛИ -----
				// Проверка с учетом субдоменов
				if((host.length>=object.domain.length)&&(host.substr(host.length-object.domain.length, object.domain.length)==object.domain)){
					alert (1);
				}
			}
		);
	}
);