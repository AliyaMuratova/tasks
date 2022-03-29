/*
1) Напишите функцию showNotification(options), которая создаёт уведомление:
    <div class="notification"> с заданным содержимым.
    Уведомление должно автоматически исчезнуть через 1,5 секунды.

    Пример объекта options:
    // показывает элемент с текстом "Hello" рядом верхней частью окна.
    showNotification({
        text: "Hello!",      // текстовое содержимое
        className: "welcome" // дополнительный класс для div (необязательно)
    });
*/
const btn = document.querySelector('#ok-btn')
const notification = document.querySelector('.notification');


function showNotification({text, className}) {
    notification.classList.add(className);
    notification.textContent = text;
    setTimeout(() => notification.classList.remove('alert'), 1500);
}
btn.onclick = () => {
    showNotification({
        text: 'Ошибка. Обновите страницу',
        className: 'alert'
    })
}
