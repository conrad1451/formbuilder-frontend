// Example: Using the Web-JS SDK to sign up a user with an email OTP
import descopeSdk from '@descope/web-js-sdk';

const sdk = descopeSdk({ projectId: 'YOUR_PROJECT_ID' });

async function signUpWithEmailOtp(email) {
    try {
        await sdk.otp.signUp.email(email);
        // Handle success, e.g., show a message to check email
    } catch (error) {
        // Handle error
    }
}

// Example: Retrieving the session token
const sessionToken = sdk.getSessionToken();