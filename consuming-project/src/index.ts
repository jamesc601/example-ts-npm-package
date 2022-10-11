import { message } from '@jamescoates/example-ts-npm-package-verdaccio';
import { message as localPackageMessage } from 'local-package';

console.log('*********************************');
console.log('This is the consuming project\n');

message('This is consuming the published typescript package');
console.log();
localPackageMessage('This is consuming the local package');

console.log('\nConsuming project complete');
console.log('*********************************');
