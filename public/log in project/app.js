const CLIENT_ID = '374095984660-uqh9pfqkcq3emmt07l7adep40iha26il.apps.googleusercontent.com';

let loggedInUser = null;
let newUser = {
    firstName: '',
    age: '',
    email: '',
    password: ''
};

function initializeGoogleSignIn() {
    if (window.google) {
        window.google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: loginCallback
        });

        window.google.accounts.id.renderButton(
            document.getElementById('google-signin-button'),
            { theme: 'outline', size: 'large' }
        );
    }
}

function loginCallback(response) {
    console.log('Google Sign-In response:', response);

    const idToken = response.credential;
    if (idToken) {
        try {
            const decodedToken = jwtDecode(idToken); // Decode the JWT
            console.log('Decoded JWT:', decodedToken);

            // Fill in the default fields
            newUser.firstName = decodedToken.given_name; // Assuming given_name from the decoded token
            newUser.email = decodedToken.email;
            
            loggedInUser = {
                firstName: decodedToken.given_name, // Assuming given_name from the decoded token
                email: decodedToken.email,
            };

            // Update UI with logged-in user info
            document.getElementById('user-firstName').textContent = 'First Name: ' + loggedInUser.firstName;
            document.getElementById('user-email').textContent = 'Email: ' + loggedInUser.email;
            document.getElementById('logged-in-user').style.display = 'block';

            // Pre-fill the form with user data
            document.getElementById('firstName').value = newUser.firstName;
            document.getElementById('email').value = newUser.email;
        } catch (error) {
            console.error('Error decoding JWT:', error);
        }
    }
}

function logOut() {
    window.google.accounts.id.revoke("anasmobeidat86@gmail.com", () => {
        console.log('User logged out');
        window.location.reload(); // Reload after logout
    });
}

function createUser() {
    newUser.age = document.getElementById('age').value;
    newUser.password = document.getElementById('password').value;

    axios.post('http://localhost:5000/createUser', newUser)
        .then((res) => {
            console.log('User created:', res.data);
            window.location.reload(); // Reload after creating user to fetch updated users list
        })
        .catch((error) => {
            console.error('Error creating user:', error);
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initializeGoogleSignIn();
});
