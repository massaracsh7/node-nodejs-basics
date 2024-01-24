import {
  join,
  dirname
} from 'path';
import {
  createWriteStream, createReadStream
} from 'fs';
import {
  fileURLToPath
} from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(
      import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname, 'files', 'fileToCompress.txt');
    const archive = join(__dirname, 'files', 'archive.gz');
    const fileStream = createReadStream(file);
    const archiveStream = createWriteStream(archive);
    const toArchive = createGzip();
    fileStream.pipe(toArchive).pipe(archiveStream);
    console.log('Compresses file fileToCompress.txt to archive.gz');
};

await compress();