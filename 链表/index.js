function Node(val) {
    this.val = val;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function find(val) {
    var currentNode = this.head;
    while (currentNode && currentNode.val !== val) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

// 新建一个 newVal 的节点，并把它插入到值为 val 的节点后
function insert(newVal, val) {
    var newNode = new Node(newVal);
    var node = this.find(val);
    // 没找到 node，插入失败
    if (!node) {
        return -1;
    }
    newNode.next = node.next;
    node.next = newNode;
    return 0;
}

function display() {
    var node = this.head;
    console.log(node.val);
    while (node.next != null) {
        node = node.next;
        console.log(node.val);
    }
}

function findPrevious(val) {
    var node = this.head;
    while (node && node.next != null && node.next.val !== val) {
        node = node.next;
    }

    // 说明找到了最后一个
    if (node.next == null) {
        return null;
    }

    return node;
}

function remove(val) {
    var previosNode = this.findPrevious(val);
    if (previosNode) {
        var node = previosNode.next;
        previosNode.next = node.next;
    }
}
