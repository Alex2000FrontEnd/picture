const inputsValidationRU = (names) => {
    names.forEach(name => {
        name.addEventListener('input', () => {
            name.value = name.value.replace(/^[A-Za-z]+$/gi, '');
        });
    });
};

export default inputsValidationRU;