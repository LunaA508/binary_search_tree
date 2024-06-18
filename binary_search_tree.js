// Binary search tree project
// Created by: LunaA508

class Node {

    // Initialize all properties of class "Node"
    constructor () {
        this.value = null;
        this.right = null;
        this.left = null;
    }

    // Method "insert" will be used to inject values into the properties "left" and "right"
    insert (value) {
        // Throw error if value already exists in tree
        if (this.value == value) {
            throw new Error ("Value already exists within tree");
        // If property "value" is less than given value, check to see if property "right" is "null"
        // If "null", a falsy value, create a new instance of "Node" and assignt it to property "right"
        // If not falsy, "null" or empty, call method insert on "right" property, an instance of "Node"     
        } else if (this.value < value) {
            if (this.right) {
                this.right.insert (value);
            } else {
                this.right = new Node (value);
            }
        // Similar to the else if statement, if "value" is greater than given value, check to see if property "left" is "null"
        // If "null", a falsy value, create a new instance of "Node" and assignt it to property "left"
        // If not falsy, "null" or empty, call method insert on "left" property, an instance of "Node"     
        } else {
            if (this.value > value) {
                this.left.insert (value)
            } else {
                this.left = new Node (value);
            }
        }
    }
}

class BinarySearchTree {
    
    // The "BinarySearchTree" class will only have property "root"
    // Property "root" will be the starting point for an instance of "BinarySearchTree"
    constructor () {
        this.root = null;
    }

    // Method "insert" will be used to set the value of property "root"
    // Method "insert" will also be used to add subsequent nodes, instances of "Node"
    insert (value) {
        // Check to see if the "root" property has a value or is "null"
        // If "null", a falsy value, call the insert function belonging to class "Node"  
        if (this.root) {
            this.root.insert(value);
        } else {
            this.root = new Node (value);
        }
    }
}