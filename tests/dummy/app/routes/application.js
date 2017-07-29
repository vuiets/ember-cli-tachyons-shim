import Route from 'ember-route';
import injectService from 'ember-service/inject';

export default Route.extend({
	ajax: injectService(),

	model() {
		const director = 'Christopher Nolan',
			netflixAPI = `https://netflixroulette.net/api/api.php?director=${director}`;

		return this.get('ajax').request(netflixAPI, {
			method: 'GET'
		});
	}
});
