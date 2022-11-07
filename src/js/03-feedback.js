const LOCALSTORAGE_KEY = "feedback-form-state";
const filterForm = document.querySelector('.feedback-form');

initForm();

filterForm.addEventListener('input', evt => {
    evt.preventDefault();
    const formData = new FormData(filterForm);
    formData.forEach((email, message));
});

filterForm.addEventListener('change', evt => {
    let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
    persistedFilters[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
});

filterForm.addEventListener('submit', () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

function initForm() {
    let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    if (persistedFilters) {
        persistedFilters = JSON.parse(persistedFilters);
        Object.entries(persistedFilters).forEach(([email, message]) => {
            filterForm.elements[email, message].value = value;
        });
    }
};