import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed';
  const fileToDelete = join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await fs.unlink(fileToDelete);
    console.log('File deleted successfully');
  } catch (error) {
    throw new Error(errorMsg);
  }
};

await remove();