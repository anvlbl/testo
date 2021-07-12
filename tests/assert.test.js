import { strict as assert } from 'assert';
import func from '../src/capitalize.js';

assert.equal(func(''), '');
assert.equal(func('hello'), 'Hello');

assert.deepEqual({key: 'value'}, {key: 'value'});
assert.deepEqual({key: 'val'}, {key: 'value'}); //there must be a error
