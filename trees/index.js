/*
    what is tree
    hierarchical data structures
    nodes
    top node => root
    parent adn children
 */

/*
    Binary Tree
    2 children at most
 */

function TreeNode(value) {
    this.left = null ;
    this.right = null ;
    this.value = value ;
}
// A simple tree
const root = new TreeNode(10) ;
root.left = new TreeNode(2) ;
root.right = new TreeNode(15) ;
root.left.left = new TreeNode(11) ;

console.log(root) ;