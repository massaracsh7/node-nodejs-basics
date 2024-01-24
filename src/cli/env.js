const parseEnv = () => {
  const envObject = process.env;
  const rssArray = Object.keys(envObject)
    .filter(key => key.startsWith('RSS_'))
    .reduce((arr, key) => {
      arr.push(`${key}=${envObject[key]}`);
      return arr;
    }, []);
  const str = rssArray.join('; ');
  console.log(str);
};

parseEnv();