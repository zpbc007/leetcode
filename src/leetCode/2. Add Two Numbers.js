/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode()
    sum(l1, l2, head)

    return head.next;
};

function sum(node1, node2, resultList, add = 0) {
    if (!node1 && !node2 && !add) {// 都到最后且没有进位
        return 
    } else {
        const val1 = node1 && node1.val,
            val2 = node2 && node2.val,
            sumNum = (val1 || 0) + (val2 || 0) + add;
        if (sumNum >= 10) {
            resultList.next = new ListNode(sumNum - 10)
            sum(node1 && node1.next, node2 && node2.next, resultList.next, 1)
        } else {
            resultList.next = new ListNode(sumNum)
            sum(node1 && node1.next, node2 && node2.next, resultList.next)
        }
    }
}