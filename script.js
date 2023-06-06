// script.js

// Get the "Get Started" button element
const getStartedButton = document.querySelector('.cta-button');

// Add a click event listener to the "Get Started" button
getStartedButton.addEventListener('click', () => {
  // Perform some action when the button is clicked
  console.log('Get Started button clicked!');
  // You can add your custom code here to perform specific actions or navigate to another page
});

// Get all the activity list items
const activityItems = document.querySelectorAll('#activities li');

// Add a click event listener to each activity list item
activityItems.forEach(item => {
  item.addEventListener('click', () => {
    // Perform some action when an activity is clicked
    console.log('Activity clicked:', item.querySelector('h3').textContent);
    // You can add your custom code here to perform specific actions or navigate to another page related to the clicked activity
  });
});

// Get all the goal list items
const goalItems = document.querySelectorAll('#goals li');

// Add a click event listener to each goal list item
goalItems.forEach(item => {
  item.addEventListener('click', () => {
    // Perform some action when a goal is clicked
    console.log('Goal clicked:', item.querySelector('h3').textContent);
    // You can add your custom code here to perform specific actions or navigate to another page related to the clicked goal
  });
});