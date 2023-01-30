import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const userName = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(userName, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);

    if (shouldSendeForm(this)) console.log('FORMULÁRIO ENVIADO');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value) {
            showErrorMessage(input, 'Campo não pode estar vazio');
        }
    });
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido');
}

function checkEqualPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement,
) {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas não batem');
        showErrorMessage(password2, 'Senhas não batem');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGE),
    );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFilds = input.parentElement as HTMLDivElement;

    const errorMessage = formFilds.querySelector(
        '.error-message',
    ) as HTMLSpanElement;

    errorMessage.innerText = msg;
    formFilds.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendeForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(
        () => (send = false),
    );
    return send;
}
