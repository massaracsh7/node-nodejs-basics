import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import {
  fileURLToPath
} from 'url';

const copy = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const errorMsg = 'FS operation failed';
  const file = join(__dirname, 'files');
  const fileCopy = join(__dirname, 'files_copy');
  try {
    await fs.access(fileCopy);
    throw new Error(errorMsg);
  } catch (error) {
    if (error.message === errorMsg) {
      throw new Error(errorMsg);
    }
    try {
      let data = await fs.readdir(file);
      if (!data.length) {
        throw new Error(errorMsg);
      }
      await fs.mkdir(fileCopy);
      await Promise.all(data.map((i) => fs.copyFile(`${file}/${i}`, `${fileCopy}/${i}`)))
      console.log('File created', fileCopy);
    } catch (error) {
      throw new Error(errorMsg);
    }
  }
};

await copy();