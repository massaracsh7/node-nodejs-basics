import {
  join,
  dirname
} from 'path';
import {
  createWriteStream,
  createReadStream
} from 'fs';
import {
  fileURLToPath
} from 'url';
import {
  createUnzip
} from 'zlib';

const decompress = async () => {
       const __filename = fileURLToPath(
         import.meta.url);
       const __dirname = dirname(__filename);
       const file = join(__dirname, 'files', 'fileToCompress.txt');
       const archive = join(__dirname, 'files', 'archive.gz');
       const fileStream = createWriteStream(file);
       const archiveStream = createReadStream(archive);
       const toUnarchive = createUnzip();
       archiveStream.pipe(toUnarchive).pipe(fileStream);
       console.log('Uncompresses archive.gz to file fileToCompress.txt');
};

await decompress();