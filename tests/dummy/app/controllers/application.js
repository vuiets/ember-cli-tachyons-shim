import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
	movies: computed.reads('model')
});
