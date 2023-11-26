const subscribeButton = document.querySelector('.subscribe-button');
const dismissButton = document.querySelector('.dismiss-button');
const emailInput = document.querySelector('.get-email');

function validateEmail(email) {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return validRegex.test(email);
}

subscribeButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  if(validateEmail(email)) {
    document.querySelector('.newsletter-container')
      .classList.add('remove-container');
    
    document.querySelector('.success-message-container')
      .classList.add('display-container');
    
    document.querySelector('.validation-message')
      .innerHTML = '';
    
    document.querySelector('.get-email')
      .classList.remove('invalidate-email');

    document.querySelector('.success-message')
    .innerHTML = 
    `
      A confirmation email has been sent to <span class="user-email">${email}</span>.
      Please open it and click the button inside to confirm your subscription.
    `;
    
  } else {
    document.querySelector('.validation-message')
      .innerHTML = 'Valid email required';
    
    document.querySelector('.get-email')
      .classList.add('invalidate-email');
  }
});

dismissButton.addEventListener('click', () => {
  document.querySelector('.newsletter-container')
  .classList.remove('remove-container');

  document.querySelector('.success-message-container')
  .classList.remove('display-container');

  emailInput.value = '';
})
