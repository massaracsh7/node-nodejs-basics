const parseArgs = () => {
  const args = process.argv.slice(2);
  const arr = args.reduce((acc, val, i) => {
    if (i % 2 === 0 && val.startsWith('--')) {
      const name = val.replace(/^--/, '');
      acc.push(`${name} is ${args[i + 1]}`);
    }
    return acc;
  }, []);
    const str = arr.join(', ');
    console.log(str);
};

parseArgs();