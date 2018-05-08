# ember-cp-definition-example


## Overview

This sample app shows two potential bugs with `ComputedProperty`:

1. Cache does not invalidate when an external `Ember.Service` property changes, unless that property is used in the component.
1. In Ember 3.1, a `ComputedProperty` defined in the `init` hook does not update when a `Ember.Service` property is updated.

## Details

This app has a component `foo-bar` with three computed properties defined in 3 different ways:

- On the prototype
- In the `init` hook
- Using an Immediately Invoked Function Expression

Please read the commit log and check out the app at different commits to see the different behaviors.

## Try it out

```bash
npm install
ember s
```
