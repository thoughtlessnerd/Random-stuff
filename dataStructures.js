// Stack data structure
// in stack there are 4 funcs
// 1. push - it puts a item in the stack on the top
// 2. pop - it deletes a item on the top of the stack
// 3. peek - it peeks (sees) the top item
// 4. length - it tells the length of the stack

class Stack
{
    constructor()
    {
        let arr = [];
        this.push = (item) => {
            arr.push(item);
        };
        this.pop = () => {
            if(arr.length === 0) return;
            arr.splice(arr.length - 1, 1);
        };
        this.peek = () => {
            if(arr.length === 0) return;
            return arr[arr.length - 1];
        };
        this.length = () => {
            return arr.length;
        };
    }
}

// sets data structure
// in sets there are 9 funcs
// has - checks wether there is a value in the collection or not
// values - it returns all the values present in the collection
// add - it adds a value to the collection
// remove - it removes a item from the collection
// size - it returns the size of the collection
// union - it returns the union array of two sets
// intersection - it returns the intersection array of two sets
// diferrence - it returns the difference array of two sets
// subset - it checks wether the other set is the subset of the first set

class Sets
{
    constructor()
    {
        let collection = [];
        this.has = (item) => {
            if(collection.indexOf(item) !== -1) return true;
            return false;
        }
        this.add = (item) => {
            collection.push(item);
            return true;
        }
        this.remove = (item) => {
            if(collection.indexOf(item) !== -1)
            {
                collection.splice(collection.indexOf(item), 1);
                return true;
            }
            return false;
        }
        this.values = () => {
            return collection;
        }
        this.size = () => {
            return collection.length;
        }
        this.union = (otherSet) => {
            let arr = []
            for(let i = 0; i < this.values().length; i++)
            {
                arr.push(this.values()[i]);
            }
            for(let i = 0; i < otherSet.values().length; i++)
            {
                if(arr.indexOf(otherSet.values()[i]) === -1) arr.push(otherSet.values()[i]);
                else continue;
            }
            return arr;
        }
        this.intersection = (otherSet) => {
            let arr = [];
            for(let i = 0; i < otherSet.values().length; i++)
            {
                if(this.values().indexOf(otherSet.values()[i]) !== -1) arr.push(otherSet.values()[i]);
                else continue;
            }
            return arr;
        }
        this.difference = (otherSet) => {
            let arr = [];
            for(let i = 0; i < this.values().length; i++)
            {
                arr.push(this.values()[i]);
            }
            for(let i = 0; i < otherSet.values().length; i++)
            {
                if(arr.indexOf(otherSet.values()[i]) !== -1) arr.splice(arr.indexOf(otherSet.values()[i]), 1);
                else continue;
            }
            return arr;
        }
        this.subset = (otherSet) => {
            for(let i = 0; i < otherSet.values().length; i++)
            {
                if(this.values().indexOf(otherSet.values()[i]) !== -1) continue;
                return false;
            }
            return true;
        }
    }
}

// Queue data structure
// in Queue data structure there are 5 funcs
// 1. enqueue - it enters a value in the back of the queue
// 2. dequeue - it removes a value in front of the queue
// 3. print - it prints the whole queue
// 4. front - it shows the front value of the queue
// 5. size - it tells the size of the queue
// 6. isEmpty - it checks wether the queue is empty or not

class Queue 
{
    constructor()
    {
        let collection = [];
        this.enQueue = (value) => {
            collection.push(value);
        }
        this.deQueue = ()  => {
            collection.shift();
        }
        this.print = () => {
            return collection;
        }
        this.front = () => {
            if(collection.length > 0) return collection[0];
            return null;
        }
        this.size = () => {
            return collection.length;
        }
        this.isEmpty = () => {
            if(collection.length === 0) return true;
            return false;
        }
    }
}

// priority Queues data structure
// same as normal queue just the element with the higher priority will go ahead of the lower priority elements

class priorityQueue
{
    constructor()
    {
        let collection = [];
        this.enQueue = (value) => {
            if(collection.length === 0) collection.push(value);
            else
            {
                for(let i = 0; i < collection.length; i++)
                {
                    if(collection[i][1] < value[1])
                    {
                        collection.splice(i, 0, value);
                        return;
                    }
                }
                collection.push(value);
            }
        }
        this.deQueue = ()  => {
            collection.shift();
        }
        this.print = () => {
            return collection;
        }
        this.front = () => {
            if(collection.length > 0) return collection[0];
            return null;
        }
        this.size = () => {
            return collection.length;
        }
        this.isEmpty = () => {
            if(collection.length === 0) return true;
            return false;
        }
    }
}

// Binary Search Tree

class Node
{
    constructor(data, left = null, right = null)
    {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST
{
    constructor()
    {
        this.root = null;
    }
    add(data)
    {
        const node = this.root;
        if(node === null)
        {
            this.root = new Node(data);
            return;
        }
        else
        {
            const searchTree = (node) => {
                if(data < node.data)
                {
                    if(node.left === null)
                    {
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null)
                    {
                        return searchTree(node.left);
                    }
                }
                else if(data > node.data)
                {
                    if(node.right === null)
                    {
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null)
                    {
                        return searchTree(node.right);
                    }
                }
                else
                {
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    findMin = () => {
        let current = this.root;
        while(current.left !== null)
        {
            current = current.left;
        }
        return current.data;
    }
    findMax = () => {
        let current = this.root;
        while(current.right !== null)
        {
            current = current.right;
        }
        return current.data;
    }
    find = (data) => {
        if(data > this.root.data)
        {
            let current = this.root;
            while(current)
            {
                if(current.data === data) return current;
                else if(current.data > data) current = current.left
                else current = current.right;
            }
            return false;
        }
        else if(data < this.root.data)
        {
            let current = this.root;
            while(current)
            {
                if(current.data === data) return current;
                else if(current.data > data) current = current.left
                else current = current.right;
            }
            return false;
        }
        else return this.root;
    }
    isPresent = (data) => {
        if(this.find(data)) return true;
        else return false;
    }
    remove = (data) => {
        const removeNode = (node, data) => {
            if(node === null)
            {
                return null;
            }
            if(data === node.data)
            {
                // node has no children
                if(node.left === null && node.right === null)
                {
                    return null;
                }
                // node has no left child
                if(node.left === null)
                {
                    return node.right;
                }
                // node has no right child
                if(node.right === null)
                {
                    return node.left;
                }
                // node has two children
                var tempNode = node.right;
                while(tempNode.left !== null)
                {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

// linked lists data structure


class LNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.header = null;
        this.add = (data) => 
        {
            if(this.header === null)
            {
                this.header = new LNode(data);
            }
            else
            {
                let currentNode = this.header;
                while(currentNode.next !== null)
                {
                    currentNode = currentNode.next;
                }
                currentNode.next = new LNode(data);
            }
        }
    }
}