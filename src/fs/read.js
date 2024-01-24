import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const read = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed';
  const file = join(__dirname, 'files', 'fileToRead2.txt');
  try {
    const text = await fs.readFile(file, 'utf-8');
    console.log(text);
  } catch (error) {
    throw new Error(errorMsg);
  }
  };

await read();