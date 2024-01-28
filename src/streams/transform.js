import {
  Transform
} from 'stream';

const transform = async () => {
  try {
    const revertText = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
      },
    });
    process.stdin.pipe(revertText).pipe(process.stdout);
    console.log('Write something to revert');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await transform();