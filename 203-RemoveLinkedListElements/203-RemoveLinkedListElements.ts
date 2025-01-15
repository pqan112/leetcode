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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let preN = dummy;
    let curN = head;
    let nexN = null;


    while(curN !==null) {
        if(curN.val === val) {
            nexN = curN.next;
            preN.next = nexN;
        } else {
            preN = preN.next;
        }


        curN = curN.next;
    }
    return dummy.next;
};