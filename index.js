import dep1 from './dep1.js';
import dep2 from './dep2.js';

void function () {
  console.log(dep1());
  console.log(dep2());
}()
