/*
    Binary Search Tree with this properties
    The left subtree of a node contains only nodes with keys lesser than the node’s key.
    The right subtree of a node contains only nodes with keys greater than the node’s key.
    The left and right subtree each must also be a binary search tree.
    There must be no duplicate nodes.
 */

class NodeTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		this.root = this._insertRecursive(this.root, value);
	}

	_insertRecursive(root, value) {
		/* If the tree is empty, return a new node */
		if (!root) {
			root = new NodeTree(value);
			return root;
		}

		/* Otherwise, recur down the tree */
		if (value < root.value) {
			root.left = this._insertRecursive(root.left, value);
		} else if (value > root.value) {
			root.right = this._insertRecursive(root.right, value);
		}

		/* return the (unchanged) node pointer */
		return root;
	}
	inOrder(cb) {
		this._inOrderTraverse(this.root, cb);
	}
	search(value) {
		return this._searchRecursive(this.root, value);
	}
	_inOrderTraverse(root, cb) {
		if (!root) return;
		if (root) {
			this._inOrderTraverse(root.left, cb);
			cb(root.value);
			this._inOrderTraverse(root.right, cb);
		}
	}

	_searchRecursive(root, value) {
		if (!root) return false;
		if (root.value === value) return true;
		if (root.value > value) return this._searchRecursive(root.left, value);
		return this._searchRecursive(root.right, value);
	}
}
