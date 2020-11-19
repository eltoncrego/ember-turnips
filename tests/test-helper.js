import Application from 'ember-turnips/app';
import config from 'ember-turnips/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
