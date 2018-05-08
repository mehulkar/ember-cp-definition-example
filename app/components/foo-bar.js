import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, defineProperty } from '@ember/object';

export default Component.extend({
  someService: service(),

  things: null,

  initCP: null, // set at init

  prototypeCP: computed('someService.counter', function() {
    return this.get('items').filter(item => item.shouldDisplay);
  }),

  init() {
    this._super(...arguments);
    const dependentKeys = ['someService.counter'];

    const cp = computed(...dependentKeys, function() {
      return this.get('items').filter(item => item.shouldDisplay);
    });
    defineProperty(this, 'initCP', cp);
  },

  iifeCP: (() => {
    const dependentKeys = ['someService.counter'];

    const cp = computed(...dependentKeys, function() {
      return this.get('items').filter(item => item.shouldDisplay);
    });

    return cp;
  })()
});

