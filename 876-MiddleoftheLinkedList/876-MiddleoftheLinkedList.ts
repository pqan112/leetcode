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
    const linkedListLength = getLengthOfLinkedList(head);
    const middleNode = Math.floor(linkedListLength/2);
    for(let i = 0; i<= middleNode; i++) {
        if(i === middleNode) {
            console.log('head', head);
            console.log('head.next', head.next)
            return head;
        }
        head = head.next;
    }
};

function getLengthOfLinkedList(head: ListNode | null): number {
    let count = 0;
    while(head !== null) {
        count++;
        head = head.next;
    }
    return count;
}