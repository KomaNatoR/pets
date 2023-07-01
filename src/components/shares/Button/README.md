# Інструкція по використанню компонента Button.

# Обробляє нижеприведенні пропси(не є обов'язкові!) пропси передаються `рядком!`. Приклад:`type="button"`.

# Пропсом можна передавати будьякий event(onClick, onSubmit і т.п.). Приклад:`onClick={onClickFunc}` .

1. type: 'button' - введення типу кнопки.
2. buttonView: "white" - варіант оформлення.
3. width: "auto" - ширина кнопки.
4. scale: "1" - збільшення чи зменшення при натисканні.
5. children: - текст в середині кнопки.

# `buttonView` є такі варіанти "white", "blue", "yellow", "close".

# `width` задаємо точно так як в CSS напр.(240px, 100vw і т.п.).

# `scale` задається, через крапку, більше чи менше одиниці напр.(0.8 чи 1.2).

# Можна також прописувати будь-який `className` для ідентифікації певної кнопки(щоб перебивати стилі!).