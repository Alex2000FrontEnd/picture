const phonesValidation = (inputs) => {
    inputs.forEach(phone => {
        phone.addEventListener('input', () => {
            phone.value = phone.value.replace(/(?!\+7)\D/, '');
    
            if (phone.value.length > 11) {
                phone.value = phone.value.slice(0, 12);
            }
            if (phone.value.length < 2) {
                phone.value = '+7' + phone.value;
            }
        });
    });
};

export default phonesValidation;