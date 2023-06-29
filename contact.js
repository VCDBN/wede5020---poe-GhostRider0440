document.querySelector('input[type=text]').addEventListener('click', function() {
    this.value = '';
  });
  
  document.querySelector('input[type=text]').addEventListener('click', function() {
    this.innerText = '';
  });
  
const nameInput = document.querySelector('input[name="name"]');
const addressInput = document.querySelector('input[name="address"]');

function checkEmptyFields() {
  if (nameInput.value.trim() === '') {
    alert('Please fill out this field!');
  } else if (addressInput.value.trim() === '') {
    alert('Please fill out this field!');
  } else {
    // Submit the form if the required fields are filled in
    // ... code to submit the form
  }
}

nameInput.addEventListener('input', checkEmptyFields);
addressInput.addEventListener('input', checkEmptyFields);
