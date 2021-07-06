import func from '../src/capitalize.js';

if (func('test') !== 'Test') {
    throw new Error('the function doesn\'t work correctly');
}
if (func('') !== '') {
    throw new Error('the function doesn\'t work correctly');
}
    console.log('all tests passed');