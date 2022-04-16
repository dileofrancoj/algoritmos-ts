// Estructura lineal de datos similar a un vector
// vector: ["asd",2,true] -> Están en posiciones contiguas de memoria vector[0] vector[1]
// lista enlazada -> no está en posiciones seguidas de memoria
const list = {
  head: {
    value: 6,
    next: {
      value: 12,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

type listValidTypes = string | number | null;

interface LinkedList {
  val?: listValidTypes;
  next?: any;
}
class ListNode {
  val?: listValidTypes;
  next?: unknown;
  constructor(val: listValidTypes) {
    this.val = val;
    this.next = null;
  }
}

const a = new ListNode("A"); // {val : "A", next:null}
const b = new ListNode("B");
const c = new ListNode("C");

// A -> B -> C // C -> B -> A
a.next = b; // {val : "A", next : {val : "B", next : null}}
b.next = c; // {val : "A", next : {val : "B", next : {val : "C", next : null}}}

function traverseLinkedList(head: LinkedList) {
  let current: LinkedList = head; // a -> b current.next
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

function recursiveTraverseLL (head:LinkedList) {
    if(!head) return;
    console.log(head)
    recursiveTraverseLL(head.next)
}

traverseLinkedList(a);
recursiveTraverseLL(a)