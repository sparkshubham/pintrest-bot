chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Wait for the login button to be available
    if(message.action==='fillLoginForm'){
    const checkLoginButton = setInterval(() => {
        const loginButton = document.querySelector('[data-test-id="simple-login-button"] button');
        if (loginButton) {
            clearInterval(checkLoginButton);
            loginButton.click();
            // Wait for the email and password fields to be available
            const checkFields = setInterval(() => {
                const emailField = document.getElementById('email');
                const passwordField = document.getElementById('password');
                if (emailField && passwordField) {
                    clearInterval(checkFields);
                    emailField.value = "sonyshubhamm@gmail.com";
                    console.log("Clicked on email",  emailField.value);
                    passwordField.value = "Secret123#";
                    console.log("Clicked on password",  passwordField.value);
                    // Submit the form
                    
                    // // chrome.runtime.sendMessage({ action: 'submitForm' });
                    setTimeout(() => {
                        const loginDiv = document.querySelector('[data-test-id="registerFormSubmitButton"] button');
                        loginDiv.click();
                        console.log('click successfully')
                    }, 2000);
                } else {
                    console.log("Email or password field not found");
                }
            }, 2000); // Check every 2 seconds for email and password fields
        } 
    }, 2000); // Check every 2 seconds for login button
   }
   if(message.action==='create_pin'){
    alert('sss');

   }
});
