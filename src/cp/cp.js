import {
  spawn
} from 'child_process';
import {
  join,
  dirname
} from 'path';
import {
  fileURLToPath
} from 'url';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(
    import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, 'files', 'script.js');

  const childProcess = spawn('node', [file, ...args]);

  process.stdin.on('data', (message) => {
    childProcess.stdin.write(message);
  });
  childProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

};
spawnChildProcess(['--a', '--b']);