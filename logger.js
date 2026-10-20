const pre = document.body.appendChild(document.createElement('pre'));
pre.className = 'console-output';
const o = console.log;
console.log = (...a) => {
  o(...a);
  pre.append(
    a.map((x) => (typeof x === 'object' ? JSON.stringify(x) : x)).join(' ') +
      '\n'
  );
};
