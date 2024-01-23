import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const create = async () => {

  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed: File already exists';
  const fileText = 'I am fresh and young';
  const file = join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.access(file);
    throw new Error(errorMsg);
  } catch(error) {
    if (error.message === errorMsg) {
      console.error(error.message);
      return;
    }

    try {
      await fs.writeFile(file, fileText);
      console.log('File created', file);
    } catch (error) {
      console.error(error.message);
    }
  }
};

await create();