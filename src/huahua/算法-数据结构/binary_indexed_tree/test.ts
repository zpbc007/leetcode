import { BinaryIndexedTree } from './binary_indexed_tree';

const tree = new BinaryIndexedTree(10);

tree.update(1, 2);
tree.update(2, 2);
tree.update(3, 2);
tree.update(4, 2);
tree.update(5, 2);
tree.update(6, 2);
tree.update(7, 2);
tree.update(8, 2);

console.log(tree.query(2));
console.log(tree.query(10));