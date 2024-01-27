import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const rename = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed';
  const oldFile = join(__dirname, 'files', 'wrongFilename.txt');
  const newFile = join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.access(newFile);
    throw new Error(errorMsg);
  } catch (error) {
    if (error.message === errorMsg) {
      throw new Error(errorMsg);
    }
    try {
      if (!oldFile) {
        throw new Error(errorMsg);
      }
      await fs.rename(oldFile, newFile);
      console.log('File renamed: wrongFilename.txt to properFilename.md');
    } catch (error) {
      throw new Error(errorMsg);
    }
  }
};

await rename();