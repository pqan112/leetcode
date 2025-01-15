/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let fast: ListNode = head, low: ListNode = head;

    while(fast !== null && fast.next !== null) {
        low = low.next;
        fast = fast.next.next;
    }
    return low;
};