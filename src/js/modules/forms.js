import postData from './services/services';
import phonesValidation from './phonesValidation';
import inputsValidationRU from './inputsValidationRU';

const forms = () => {
    const formAll = document.querySelectorAll('form'),
          inputsPhone = document.querySelectorAll('[name="phone"]'),
          inputsName = document.querySelectorAll('[name="name"]'),
          inputsMessage = document.querySelectorAll('[name="message"]');

    phonesValidation(inputsPhone);
    inputsValidationRU(inputsName);
    inputsValidationRU(inputsMessage);

    formAll.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const showLoadStage = {
                formContent: form.closest('.popup-content'),
                button: form.querySelector('button'),
                popupSuccess: `
                    <div class=popup-content data-popup-message>
                        <button class=popup-close>&times;</button>
                        <h4>Спасибо! Скоро мы с вами свяжемся</h4>
                    </div>
                `,
                popupFailure: `
                    <div class=popup-content data-popup-message>
                        <button class=popup-close>&times;</button>
                        <h4>Ошибка! Пожалуйста попробуйте позже...</h4>
                    </div>
                `,
                loading: function() {
                    this.button.classList.add('active');
                    this.formContent.style.pointerEvents = 'none';
                },
                success: function() {
                    this.formContent.style.display = 'none';
                    this.formContent.parentElement
                        .insertAdjacentHTML('beforeend', this.popupSuccess);
                },
                failure: function() {
                    this.formContent.style.display = 'none';
                    this.formContent.parentElement
                        .insertAdjacentHTML('beforeend', this.popupFailure);
                },
                ending: function() {
                    this.formContent.parentElement
                        .querySelectorAll('[data-popup-message]')
                        .forEach(item => item.remove());

                    this.formContent.style.display = 'block';
                    this.button.classList.remove('active');
                    this.formContent.style.pointerEvents = '';
                }
            };

            showLoadStage.loading();

            const formData = new FormData(form);

            postData('assets/server.php', formData)
                .then(() => {
                    showLoadStage.success();
                })
                .catch(() => {
                    showLoadStage.failure();
                })
                .finally(() => {
                    setTimeout(() => {
                        showLoadStage.ending();
                        form.reset();

                        setTimeout(() => {
                            form.closest('[data-modal]').click();
                        }, 1000);
                    }, 3000);
                });
        });
    });
};

export default forms;