// Simple hash function to generate a hash index based on the name
function simpleHash(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i); // Add character codes
    }
    return hash % 100; // Limit index range (0 to 99)
}

// Create an empty hash table (object)
let hashTable = {};

// Initial list of 5 customers
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
for (let i = 0; i < customers.length; i++) {
    let name = customers[i];
    let index = simpleHash(name); // Generate hash index

    // If the index is already used, find the next empty one (linear probing)
    while (hashTable[index]) {
        index = (index + 1) % 100;
    }

    hashTable[index] = name; // Store customer in hash table
}
console.log("Initial Hashed Table:");
console.log(hashTable); // Display initial table in console

// Function to add a new customer
function addCustomer() {
    let name = prompt("Enter your name:");

    if (name) {
        let index = simpleHash(name); // Get hash index

        // Find next available index if current one is taken
        while (hashTable[index]) {
            index = (index + 1) % 100;
        }

        hashTable[index] = name; // Store in table
        alert(`${name}, you are assigned to index ${index}.`);
        console.log("Updated Hashed Table:");
        console.log(hashTable); // Show updated table
    }
}

// Function to serve a customer by index
function serveCustomer() {
    let num = parseInt(prompt("Enter index to serve:"));

    // If customer exists at that index
    if (hashTable[num]) {
        alert("Now serving: " + hashTable[num]); // Show name
        delete hashTable[num]; // Remove from table
        console.log("Updated Hashed Table:");
        console.log(hashTable); // Show table after serving
    } else {
        alert("No customer at this index."); // If slot is empty or invalid
    }
}

// Main loop for menu
let run = true;
while (run) {
    let choice = prompt("Choose an action:\n1 - Add Customer\n2 - Serve Customer\n3 - Exit");

    if (choice === "1") {
        addCustomer(); // Call function to add
    } else if (choice === "2") {
        serveCustomer(); // Call function to serve
    } else if (choice === "3") {
        run = false; // Exit the loop
        alert("Goodbye!");
    } else {
        alert("Invalid option."); // Handle invalid inputs
    }
}
