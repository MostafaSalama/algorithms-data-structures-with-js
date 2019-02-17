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
	levelOrder(){
	    const h = this.height(this.root);
	    for(let i = 1 ; i<=h ; i++) {
                this._printLevel(this.root,i) ;
        }
    }
    _printLevel(root,level){
        if(!root) return ;
        if(level === 1) console.log(root.value) ;
        else if (level > 1) {
            this._printLevel(root.left,level-1) ;
            this._printLevel(root.right,level-1) ;
        }
    }
}

const b = new BinaryTree() ;
b.root = new Node(10) ;
b.root.left = new Node(20) ;
b.root.right = new Node(20) ;
b.root.right.right = new Node(20) ;
b.root.right.right.right = new Node(20) ;
console.log(b.height(b.root));
b.levelOrder()