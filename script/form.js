const form = document.querySelector('form');

const validateUserInput = (name, email, text) => {
  return name && email && text; //empty string is falsy;
};

const resetInputValue = (...inputs) => {
  for (const input of inputs) {
    input.value = '';
  }
};

const submitEmailHandler = (ev) => {
  ev.preventDefault();
  const user_name = ev.target[0].value.trim();
  const user_email = ev.target[1].value.trim();
  const user_text = ev.target[2].value.trim();

  if (validateUserInput(user_name, user_email, user_text)) {
    renderMessage(user_name);
    resetInputValue(ev.target[0], ev.target[1], ev.target[2]);
  } else {
    alert('Please Fill All Fields');
  }
};

form.addEventListener('submit', submitEmailHandler);
