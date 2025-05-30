// Initial Customers in Queue
// Starting list of customers already in the queue
let queue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
console.log("Initial Queue:");
console.log(queue); // Display the initial queue in the console

// Function to add a new customer to the queue
function addCustomer() {
    let newCustomer = prompt("Enter your name to join the queue:"); // Ask the user for their name
    if (newCustomer) {
        queue.push(newCustomer); // Add the customer to the end of the queue
        alert(`${newCustomer}, you are number ${queue.length} in the queue.`); // Show their position in the queue
        console.log("Updated Queue:");
        console.log(queue); // Display the updated queue
    }
}

// Function to service a customer based on their number in the queue
function serviceCustomer() {
    let number = parseInt(prompt("Enter the number of the customer to service (starting from 1):")); // Ask which number to serve

    if (number > 0 && number <= queue.length) {
        // If the number is valid and within the range of the queue
        alert("Now serving: " + queue[number - 1]); // Show the customer's name being served
        queue.splice(number - 1, 1); // Remove the customer from the queue
        console.log("Updated Queue:");
        console.log(queue); // Show the updated queue
    } else {
        alert("Invalid number."); // Error message if input is invalid
    }
}

// Main program loop
// Continues to run until the user chooses to exit
let running = true;
while (running) {
    // Ask the user to choose an action
    let action = prompt("Choose an action:\n1 - Add Customer\n2 - Service Customer\n3 - Exit");

    switch(action) {
        case "1":
            addCustomer(); // Call the function to add a new customer
            break;
        case "2":
            serviceCustomer(); // Call the function to service a customer
            break;
        case "3":
            running = false; // End the loop
            alert("Exiting queue system."); // Show exit message
            break;
        default:
            alert("Invalid option. Please choose 1, 2, or 3."); // Error message for invalid choices
    }
}
