import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {MainComponent} from './main';

export const STATES = [
  {
    name: 'App',
    url: '/',
    component: MainComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('App');
  }
}
