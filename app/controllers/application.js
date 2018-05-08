import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  someService: service(),

  init() {
    this._super(...arguments);
    this.set('items', [
      { name: 'foo', shouldDisplay: true },
      { name: 'bar', shouldDisplay: true },
      { name: 'baz', shouldDisplay: true },
    ])
  },

  actions: {
    toggleItem(item) {
      set(item, 'shouldDisplay', !get(item, 'shouldDisplay'));
      this.incrementProperty('someService.counter');
    }
  }
});
