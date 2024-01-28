import {
  join,
  dirname
} from 'path';
import {
  fileURLToPath
} from 'url';
import {
  Worker
} from 'worker_threads';
import {
  cpus
} from 'os';


const performCalculations = async () => {
    let num = 10;
    const cp = cpus();
    const __filename = fileURLToPath(
      import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname, 'worker.js');
    const resultsArr = await Promise.allSettled(cp.map((item) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(file, {
          workerData: num++
        });

        worker.on('message', (result) => {
          resolve({
            status: 'resolved',
            data: result
          });
        });

        worker.on('error', (error) => {
          reject({
            status: 'error',
            data: null
          });
        });
      })
    }))

    const answer = resultsArr.map((item) => ({
      status: item.status === 'fulfilled' ? 'resolved' : 'error',
      data: item.status === 'fulfilled' ? item.value.data : null
    }));
    console.log(answer);
};

await performCalculations();