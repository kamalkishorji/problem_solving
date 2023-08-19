class TreeNode{
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new TreeNode(val);

        if (!this.root) {
            this.root = node;
            return;
        }

        let q = [];
        q.push(this.root);

        while (q.length > 0) {
            let tmp = q.shift();

            if (tmp.left) {
                q.push(tmp.left);
            } else {
                tmp.left = node;
                return;
            }

            if (tmp.right) {
                q.push(tmp.right);
            } else {
                tmp.right = node;
                return;
            }
        }
    }

    recPreOrder(root) {
        if (root) {
            process.stdout.write(root.val + " ");
            this.recPreOrder(root.left);
            this.recPreOrder(root.right);
        }
    }

    nonRecPreOrder(root) {
        let s = [];
        while (true) {
            while (root) {
                process.stdout.write(root.val + " ");
                s.push(root);
                root = root.left;
            }
            if (s.length === 0) {
                break;
            }
            root = s.pop();
            root = root.right;
        }
    }
}

const tree = new BinaryTree();
for (let i = 1; i < 8; i++){
    tree.insert(i);
}

tree.recPreOrder(tree.root);
console.log(" ");
tree.nonRecPreOrder(tree.root);
console.log(" ");
