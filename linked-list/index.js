/*
    Linked List
    Node (value , next)
 */

function Node(value) {
    this.value = value ;
	this.next = null;
}

function LinkedList() {
    this.head = null ;

}

let linkedList = new LinkedList() ;
linkedList.head = new Node(2) ;
linkedList.head.next = new Node(3) ;
