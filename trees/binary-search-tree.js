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
	deleteValue(value) {
		this.root = this._deleteRecursive(this.root, value);
	}

	_deleteRecursive(root, value) {
		/* Base Case: If the tree is empty */
		if (!root) return root;

		/* Otherwise, recur down the tree */
		if (value < root.value) root.left = this._deleteRecursive(root.left, value);
		else if (value > root.value)
			root.right = this._deleteRecursive(root.right, value);
		// if value is same as root's value, then This is the node
		// to be deleted
		else {
			// node with only one child or no child
			if (root.left == null) {
				return root.right;
			} else if (root.right == null) {
				return root.left;
			}

			// node with two children: Get the inOrder successor (smallest
			// in the right subtree)
			root.value = this.minValue(root.right);

			// Delete the inorder successor
			root.right = this._deleteRecursive(root.right, root.value);
		}

		return root;
	}

	minValue(root) {
		let minValue = root.value;
		while (root.left) {
			minValue = root.left.value;
			root = root.left;
		}
		return minValue;
	}
}
