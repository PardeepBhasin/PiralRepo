import * as React from 'react';
import { PiletApi } from 'poc-shell';
import ProductList from './ProductList';

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="/homepage" target="_self">Homepage</a>
  // );
  app.registerTile(() => <div>First Child App</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
  app.registerExtension('notify-me', (item: any) => {
    return <div>I am number test {item.params.value} shared from first pilet</div>
  })
  app.registerPage('/firstPilet', () => {
    return <div>
              <ProductList name={app.getData('name')}/>
            </div>
  })
}
