chrome.runtime.onInstalled.addListener(
	function() {
		chrome.alarms.create("update_list_alarm", {'periodInMinutes': 0.2}); // FIX interval
		load_list();
	}
);

chrome.runtime.onStartup.addListener(
	function() {
		// TODO fill notify array
		load_list();
	}
);

chrome.alarms.onAlarm.addListener(
	function(alarm) {
		if (alarm.name == "update_list_alarm") {
			load_list();
		}
	}
);