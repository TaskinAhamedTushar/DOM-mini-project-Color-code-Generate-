// Function to generate a random RGB color
const generateRGBColor = () => {
  const r = Math.floor(Math.random() * 255); // Generate random red value
  const g = Math.floor(Math.random() * 255); // Generate random green value
  const b = Math.floor(Math.random() * 255); // Generate random blue value

  return `rgb(${r}, ${g}, ${b})`;
};

// Function to update the color box and color code
const updateColor = () => {
  const color = generateRGBColor();
  const colorBox = document.getElementById('colorBox');
  const colorCode = document.getElementById('colorCode');
  
  colorBox.style.backgroundColor = color; // Update the background color
  colorCode.innerText = color; // Update the color code text
};

// Function to copy the color code to clipboard
const copyColorCode = () => {
  const colorCode = document.getElementById('colorCode');
  const input = document.createElement('input');
  document.body.appendChild(input);
  
  input.value = colorCode.innerText; // Set the input value to the color code
  input.select();
  document.execCommand('copy'); // Copy the color code to clipboard
  document.body.removeChild(input); // Remove the temporary input element
  
  alert('Color copied to clipboard'); // Show confirmation
};

// Add event listener to copy button
document.getElementById('copyBtn').addEventListener('click', () => {
  copyColorCode(); // Call copyColorCode when button is clicked
});

// Add functionality to generate a new color
function generateNewColorBtn() {
  updateColor(); // Call updateColor to generate a new color
}