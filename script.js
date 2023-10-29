function calculateAge() {
    // Get the input value for Date of Birth
    const dobInput = document.getElementById('dob').value;

    // Convert the input value to a Date object
    const dob = new Date(dobInput);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday for this year has passed
    if (currentDate < new Date(currentDate.getFullYear(), dob.getMonth(), dob.getDate())) {
        age--;
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age is ${age} years old.`;
}
