// Находим элементы формы
const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvcInput = document.getElementById('cardCvc');
const paymentForm = document.getElementById('paymentForm');

// 1. Маска для номера карты (автоматом добавляет пробел каждые 4 цифры)
cardNumberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Только цифры
    value = value.replace(/(.{4})/g, '$1 ').trim(); // Пробел каждые 4 символа
    e.target.value = value;
});

// 2. Маска для срока действия (ММ/ГГ)
cardExpiryInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

// 3. Ограничение ввода CVC только цифрами
cardCvcInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// 4. Обработка клика и отправки формы
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Запрещаем стандартную перезагрузку страницы

    const cardNumberRaw = cardNumberInput.value.replace(/\s/g, '');

    // Простая проверка длины номера карты
    if (cardNumberRaw.length < 16) {
        alert('Пожалуйста, введите полный 16-значный номер карты.');
        return;
    }

    // Сообщение об успешной оплате в тенге
    alert('Оплата на сумму 4 700 ₸ прошла успешно!');
});