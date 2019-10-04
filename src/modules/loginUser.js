export default function loginUser() {
    const loginField = document.querySelector('.form-login__username'),
        passwordField = document.querySelector('.form-login__password'),
        loginBtn = document.querySelector('.form-login__sign-in__btn');

    function sendPost(path, params, method='post') {

        const form = document.createElement('form');
        form.method = method;
        form.action = path;

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const hiddenField = document.createElement('input');
                hiddenField.type = 'hidden';
                hiddenField.name = key;
                hiddenField.value = params[key];

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        console.log('POST: ', form);
        form.submit();
    }

    loginBtn.addEventListener('click', () => {
        const loginInput = loginField.querySelector('.input100'),
            passwordInput = passwordField.querySelector('.input100');

        if (loginInput.value.length === 0) {
            alert('Введите логин');
        }

        if (passwordInput.value.length === 0) {
            alert('Введите пароль');
        }

        const params  = {
            'username': loginInput.value,
            'password': passwordInput.value
        };

        sendPost('http://localhost:8000/api/v1.0/', params);

    });
}
