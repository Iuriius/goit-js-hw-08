// addEventListener('input', (event) => { });
// oninput = (event) => { };
const textInputElement = document.getElementById('textInput');
textInputElement.addEventListener('Keydown', function () {
    const text = textInputElement.value;
});

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}
