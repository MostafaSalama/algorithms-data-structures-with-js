/*

	different way to traverse a tree

	InOrder Left => Root => Right
	PreOrder Root => Left => Right
	PostOrder Left => Right => Root

	BF Breadth First or Level Order
 */

function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function inOrder(root, cb) {
	if (!root) return;
	inOrder(root.left, cb);
	cb(root.value);
	inOrder(root.right, cb);
}

function preOrder(root, cb) {
	if (!root) return;
	cb(root.value);
	preOrder(root.left, cb);
	preOrder(root.right, cb);
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.right.right = new TreeNode(20);
root.right.left = new TreeNode(12);

inOrder(root, value => {
	console.log(value); // 5 10 12 15 20
});

preOrder(root,value=>{
	console.log(value) ; // 10 5 15 12 20
})