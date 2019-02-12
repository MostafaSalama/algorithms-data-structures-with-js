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

LinkedList.prototype.traverse = function(cb){
    let current = this.head ;
    while (current!== null) {
        cb(current.value) ;
        current = current.next ; 
    }
}
let linkedList = new LinkedList() ;
linkedList.head = new Node(2) ;
linkedList.head.next = new Node(3) ;
linkedList.head.next.next = new Node(3) ;

linkedList.traverse((value)=>{
    console.log(`value is ${value}`)
})
