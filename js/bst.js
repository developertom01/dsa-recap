class BinaryNode {

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        if (!this.root) {
            this.root = new BinaryNode(value)
            return
        } else {
            insertObject(this.root, new BinaryNode(value))
        }


    }
}

function insertObject(node, newNode) {
    if (newNode.value < node.value) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertObject(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        }
        insertObject(node.right, newNode)
    }
}

module.exports = {BST}