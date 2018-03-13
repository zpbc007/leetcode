/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let currentNode = head.next,
        visualHead = new ListNode(null)
    // 虚拟头结点，在插入到头结点之前时起作用
    visualHead.next = head

    // 遍历链表
    while (currentNode !== null) {
        let preNode = visualHead,
            nextNode = visualHead.next,
            next = currentNode.next,
            last = null
        while(nextNode && currentNode.val > nextNode.val && nextNode !== currentNode) {
            preNode = nextNode
            nextNode = nextNode.next
        }
        if (nextNode !== currentNode) {
            let tempNode = nextNode
            while(tempNode !== currentNode) {
                last = tempNode
                tempNode = tempNode.next
            }
        } else {
            last = nextNode
        }
        insert(preNode, currentNode, nextNode, last)
        currentNode = next
    }

    return visualHead.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

function insert(preNode, currentNode, nextNode, last) {
    if (preNode.next === currentNode) {// 不需要移动
        
    } else {
        last.next = currentNode.next
        preNode.next = currentNode
        currentNode.next = nextNode
    }
}