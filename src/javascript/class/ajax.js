TIB.Ajax = class _Ajax {
	static GET(URL, param) {
		let query = '';
		if (param) {
			query = '?';
			for (let key in param) {
				query += key + '=' + param[key] + '&';
			}
			query = query.slice(0, -1);
		}
		
		let url = TIB.API_DOMAIN + URL + query;
		
		return fetch(url, {
			method: 'GET'
		}).then(function(res) {
			// if (res.ok) {
			if (res.status >= 200 && res.status < 300) {
				return res.json();
			} else {
				let error = new Error(res.statusText);
				error.res = res;
				throw error;
			}
		});
	}
	
	static POST(URL, param, credentials) {
		let url = TIB.API_DOMAIN + URL;
		let bodyData = JSON.stringify(param);
		
		return fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: credentials ? credentials : 'omit',
			body: bodyData
		}).then(function(res) {
			// if (res.ok) {
			if (res.status >= 200 && res.status < 300) {
				return res.json();
			} else {
				let error = new Error(res.statusText);
				error.res = res;
				throw error;
			}
		});
	}
	
	static PUT(URL, param, credentials) {
		let url = TIB.API_DOMAIN + URL;
		let bodyData = JSON.stringify(param);
		
		return fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			credentials: credentials ? credentials : 'omit',
			body: bodyData
		}).then(function(res) {
			// if (res.ok) {
			if (res.status >= 200 && res.status < 300) {
				return res.json();
			} else {
				let error = new Error(res.statusText);
				error.res = res;
				throw error;
			}
		});
	}
};
