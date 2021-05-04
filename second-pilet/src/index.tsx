import * as React from 'react';
import { PiletApi } from 'poc-shell';

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  app.registerTile(() => <div>Second Child App</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
  app.setData("name", "pardeep bhasin");
  app.registerPage('/secondPilet', () => {
    return <div>
            <h1>Second pilet</h1>
            <app.Extension 
              name="notify-me"
              params={{ value: 5 }}
            />
      </div>
  })
}
