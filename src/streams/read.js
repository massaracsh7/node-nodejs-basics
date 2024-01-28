import {
  join,
  dirname
} from 'path';
import {
  createReadStream
} from 'fs';
import {
  fileURLToPath
} from 'url';

const read = async () => {
  const __filename = fileURLToPath(
    import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const fileStream = createReadStream(file, 'utf-8');
    fileStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });
  } catch (error) {
    console.error(`Error`);
  }
};

await read();
