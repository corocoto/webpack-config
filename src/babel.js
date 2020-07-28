async function start() {
    return await Promise.resolve('async is working!');
}

const unused =42;

start().then(console.log);

import('lodash').then(_ => console.log(_.random(0, 54, true)));