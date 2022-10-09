import { message } from './index';
import { message as packageMessage } from 'local-package';

console.log('*********************************');
console.log('Starting the test\n');

message('This uses the function directly');
console.log();
packageMessage('This uses the local package');

console.log('\nTest completed');
console.log('*********************************');
