import {
  join,
  dirname
} from 'path';
import {
  createWriteStream
} from 'fs';
import {
  fileURLToPath
} from 'url';

const write = async () => {
  const __filename = fileURLToPath(
    import.meta.url);
  const __dirname = dirname(__filename);
  const file = join(__dirname, 'files', 'fileToWrite.txt');

  try {
    const fileStream = createWriteStream(file, 'utf-8');
      process.stdin.on('data', chunk => {
        fileStream.write(chunk.toString())
      });
    console.log('Write, please, something:');
  } catch (error) {
    throw error;
  }

};

await write();