const ageSlider = document.getElementById('ageSlider');
const ageInput = document.getElementById('ageInput');

// Update the age slider when the input value changes
ageInput.addEventListener('input', function () {
    ageSlider.value = ageInput.value;
});

// Update the input value when the slider value changes
ageSlider.addEventListener('input', function () {
    ageInput.value = ageSlider.value;
});

function displayDetails(event) {
    event.preventDefault();
    const form = document.getElementById('registrationForm');
    const detailsContainer = document.getElementById('detailsContainer');

    const name = form.name.value;
    const age = form.ageInput.value;
    const gender = form.gender.value;
    const domain = Array.from(form.domain)
        .filter(input => input.checked)
        .map(input => input.value);

    const detailsHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Domain:</strong> ${domain.join(', ')}</p>
        <!-- Add more details as needed -->
    `;

    detailsContainer.innerHTML = detailsHTML;
    detailsContainer.style.display = 'block';
}