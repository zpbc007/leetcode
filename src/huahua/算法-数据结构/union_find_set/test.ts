import { UnionFindSet } from './union_find_set';

const set = new UnionFindSet(10);
console.log(set.find(0), set.find(9));

set.union(0, 1);
set.union(1, 2);
set.union(2, 3);

console.log(set.find(3), set.find(9));
console.log(set.getRank(3), set.getRank(9));