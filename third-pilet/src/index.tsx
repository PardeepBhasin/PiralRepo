import * as React from 'react';
import { PiletApi } from 'poc-shell';

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  app.registerTile(() => <div>Third Child App</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
}
