import {
  join,
  dirname
} from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(
    import.meta.url));
  const file = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  try {
    const text = await fs.readFile(file);
    const hashFile = hash.update(text).digest('hex');
    console.log(hashFile);
  } catch (error) {
    throw new Error(error);
  }
};

await calculateHash();