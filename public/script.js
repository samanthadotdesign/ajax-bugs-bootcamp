// Get the list of features to populate the dropdown
// Happens on page load
let featuresList;
axios.get('/features').then((result) => {
  featuresList = result.data;
  // featuresList is an array of objects
});

// When I click on <Create a bug> button>, render the form
const buttonEl = document.querySelector('.create-bug');

buttonEl.addEventListener('click', () => {
  const formDiv = document.createElement('div');

  // Create each input element that we can use in the post request
  const problemInput = document.createElement('input');
  problemInput.name = 'problem';
  problemInput.placeholder = 'What is the problem?';
  formDiv.appendChild(problemInput);

  const errorTextInput = document.createElement('input');
  errorTextInput.name = 'errorText';
  errorTextInput.placeholder = 'What is the error message?';
  formDiv.appendChild(errorTextInput);

  const commitInput = document.createElement('input');
  commitInput.name = 'commit';
  commitInput.placeholder = 'What is your commit message?';
  formDiv.appendChild(commitInput);

  // For each feature, create a dropdown option
  const dropdownEl = document.createElement('select');
  featuresList.forEach((feature) => {
    const optionEl = document.createElement('option');
    // Grab the feature id for the option that has been selected
    optionEl.value = feature.id;
    optionEl.innerText = feature.name;
    dropdownEl.appendChild(optionEl);
  });
  formDiv.appendChild(dropdownEl);

  // Create button for form
  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Submit bug';

  // Add the axios POST request for the submit button
  submitBtn.addEventListener('click', async () => {
    // Dropdown value can be stored inside dropdownEl.VALUE
    const featureId = dropdownEl.value;

    // Creating a new object to store the form data & passing into the post
    const formData = {
      problem: problemInput.value,
      errorText: errorTextInput.value,
      commit: commitInput.value,
    };

    await axios.post(`/bug/${featureId}`, formData);
  });

  formDiv.appendChild(submitBtn);

  document.body.appendChild(formDiv);
});
