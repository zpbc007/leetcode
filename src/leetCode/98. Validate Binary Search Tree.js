/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity)
};

function valid(root, min, max) {
    if (!root) {
        return true;
    }
    const curVal = root.val;
    if (curVal >= max || curVal <= min) {
        return false
    } else {
        return valid(root.left, min, curVal) && valid(root.right, curVal, max)
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}