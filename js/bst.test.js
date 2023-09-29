const { BST } = require("./bst");

describe('BST', () => {

    // Inserting a single node into an empty BST
    it('should insert a single node into an empty BST', () => {
        const bst = new BST();
        bst.insert(5);
        expect(bst.root.value).toBe(5);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });

    // Inserting nodes in ascending order
    it('should insert nodes in ascending order', () => {
        const bst = new BST();
        bst.insert(1);
        bst.insert(2);
        bst.insert(3);
        expect(bst.root.value).toBe(1);
        expect(bst.root.left.value).toBe(2);
        expect(bst.root.right.value).toBe(3);
    });

    // Inserting nodes in descending order
    it('should insert nodes in descending order', () => {
        const bst = new BST();
        bst.insert(3);
        bst.insert(2);
        bst.insert(1);
        expect(bst.root.value).toBe(3);
        expect(bst.root.left.value).toBe(2);
        expect(bst.root.right.value).toBe(1);
    });

    // Inserting a node with the same value as the root node
    it('should insert a node with the same value as the root node', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(5);
        expect(bst.root.value).toBe(5);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });

    // Inserting a node with the same value as an existing node
    it('should insert a node with the same value as an existing node', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(3);
        expect(bst.root.value).toBe(5);
        expect(bst.root.left.value).toBe(3);
        expect(bst.root.right.value).toBe(7);
        expect(bst.root.left.left).toBeNull();
        expect(bst.root.left.right).toBeNull();
        expect(bst.root.right.left).toBeNull();
        expect(bst.root.right.right).toBeNull();
    });

    // Inserting null or undefined values
    it('should not insert null or undefined values', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(null);
        bst.insert(undefined);
        expect(bst.root.value).toBe(5);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });
});
