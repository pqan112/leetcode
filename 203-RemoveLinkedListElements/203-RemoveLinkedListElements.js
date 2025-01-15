/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummy = new ListNode(0)
    let newHead = dummy;

    while (head !== null) {
        if (head.val !== val) {
            newHead.next = new ListNode(head.val);
            newHead = newHead.next;
        }
        head = head.next;
    }

    return dummy.next;
};