
const cache = {};

export function load(moduleName, modulePath) {
  if (!cache[moduleName]) {
    cache[moduleName] = (modulePath);
  }
  console.log(cache)
  return cache[moduleName];
}


