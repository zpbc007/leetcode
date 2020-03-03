class ListNode {
    next: ListNode | null = null

    constructor(public val?: number) {

    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head: ListNode) => {
    if (!head || !head.next) {
        return head
    }
    const nodeStack = [head.val]

    while(head.next) {
        head = head.next
        nodeStack.push(head.val)
    }

    const newHead = new ListNode()
    let tempHead = newHead
    while (nodeStack.length > 0) {
        const next = new ListNode(nodeStack.pop())
        tempHead.next = next
        tempHead = tempHead.next
    }

    return newHead.next
};


var node5 = new ListNode(5)
var node4 = new ListNode(4)
var node3 = new ListNode(3)
var node2 = new ListNode(2)
var node1 = new ListNode(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5