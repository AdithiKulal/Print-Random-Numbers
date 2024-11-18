// Define the number of random numbers to generate
let numberOfRandomNumbers = 10;

// Initialize a counter variable
let i = 0;

// Use a while loop to generate random numbers
while (i < numberOfRandomNumbers) {
    // Declare a block-scoped variable using let
    let randomNumber = Math.floor(Math.random() * 100);

    // Create a list item element to display the random number
    let listItem = document.createElement("li");
    listItem.textContent = randomNumber;

    // Append the list item to the #random-numbers ol
    document.getElementById("random-numbers").appendChild(listItem);

    // Increment the counter
    i++;
}

// Sort the list items in ascending order
let listItems = document.getElementById("random-numbers").children;
Array.prototype.sort.call(listItems, function (a, b) {
    return parseInt(a.textContent) - parseInt(b.textContent);
});

// Re-append the sorted list items
let sortedList = document.getElementById("random-numbers");
sortedList.innerHTML = '';
for (let i = 0; i < listItems.length; i++) {
    sortedList.appendChild(listItems[i]);
}

