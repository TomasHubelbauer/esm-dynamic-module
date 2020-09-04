async function entry(shared) {
  const module = await import('./shared.js');
  for (const key in shared) {
    module.default[key] = shared[key];
  }

  return import('./index.js');
}

void async function () {
  const mod = await entry({ data1: 'one', data2: 'two' });
}()
