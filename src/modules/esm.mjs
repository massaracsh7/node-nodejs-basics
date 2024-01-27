import path from 'path';
import {
  release,
  version
} from 'os';
import {
  createServer as createServerHttp
} from 'http';
import './files/c.js';

const random = Math.random();

const unknownObject = async () => {
  if (Math.random() > 0.5) {
    return await import('./files/a.json', {
        assert: {
          type: 'json'
        }
      })
  } else {
    return await import('./files/b.json', {
      assert: {
        type: 'json'
      }
    });
  }
};

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export {
  unknownObject,
  myServer
};
