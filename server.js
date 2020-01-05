/* global process */

import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('dist/db/app.json');
const middlewares = defaults({
  static: 'dist',
  noCors: true
});
const port = process.env.PORT || 3131;

server.use(middlewares);
server.use(router);

server.listen(port);