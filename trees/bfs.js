class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BinaryTree {
	constructor() {
		this.root = null;
	}
	height(root) {
		if (!root) return 0;

			// compute height of each subTree
			let lHeight = this.height(root.left);
			let rHeight = this.height(root.right);
			// use the largest height
			if (lHeight > rHeight) return lHeight + 1;
			 return rHeight + 1;

	}
}

const b = new BinaryTree() ;
b.root = new Node(10) ;
b.root.left = new Node(20) ;
b.root.right = new Node(20) ;
b.root.right.right = new Node(20) ;
b.root.right.right.right = new Node(20) ;
console.log(b.height(b.root));