import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const list = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed';
  const folder = join(__dirname, 'files');
  try {
    let data = await fs.readdir(folder);
    console.log(data);
  }
  catch(error) {
    throw new Error(errorMsg);
  }
};

await list();