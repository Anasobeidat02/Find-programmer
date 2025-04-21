document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('welcomeMessage', data.message);

            // تخزين الاسم الأول للمستخدم أو المبرمج في sessionStorage
            sessionStorage.setItem('userName', data.firstName); // Assuming `firstName` is the key in the response
            window.location.href = data.redirectUrl;
        } else {
            const errorText = await response.text();
            alert(errorText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in');
    }
});
