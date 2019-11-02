keyboardKeys = [
    [
        ["", "Backquote", "ё", "Ё", "`", "~"],
        ["", "Digit1", "1", "!", "1", "!"],
        ["", "Digit2", "2", '"', "2", "@"],
        ["", "Digit3", "3", "№", "3", "#"],
        ["", "Digit4", "4", ";", "4", "$"],
        ["", "Digit5", "5", "%", "5", "%"],
        ["", "Digit6", "6", ":", "6", "^"],
        ["", "Digit7", "7", "?", "7", "&"],
        ["", "Digit8", "8", "*", "8", "*"],
        ["", "Digit9", "9", "(", "9", "("],
        ["", "Digit0", "0", ")", "0", ")"],
        ["", "Minus", "-", "_", "-", "_"],
        ["", "Equal", "=", "+", "=", "+"],
        ["backspace", "Backspace", "Backspace", "Backspace", "Backspace", "Backspace"]
    ],
    [
        ["tab", 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ["", 'KeyQ', "й", "Й", "q", "Q"],
        ["", 'KeyW', "ц", "Ц", "w", "W"],
        ['', 'KeyE', "у", "У", "e", "E"],
        ['', 'KeyR', "к", "К", "r", "R"],
        ['', 'KeyT', "е", "Е", "t", "T"],
        ["", 'KeyY', "н", "Н", "y", "Y"],
        ['', 'KeyU', "г", "Г", "u", "U"],
        ['', 'KeyI', "ш", "Ш", "i", "I"],
        ['', 'KeyO', "щ", "Щ", "o", "O"],
        ['', 'KeyP', "з", "З", "p", "P"],
        ['', 'BracketLeft', "х", "Х", "[", "{"],
        ['', 'BracketRight', "ъ", "Ъ", "]", "}"],
        ["", 'Backslash', "\\", "/", "\\", "|"],
        ['del', "Delete", 'Del', 'Del', 'Del', 'Del', 'Del']
    ],
    [
        ["capslock", 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['', 'KeyA', "ф", "Ф", "a", "A"],
        ['', 'KeyS', "ы", "Ы", "s", "S"],
        ['', 'KeyD', "в", "В", "d", "D"],
        ['', 'KeyF', "а", "А", "f", "F"],
        ['', 'KeyG', "п", "П", "g", "G"],
        ["", "KeyH", "р", "Р", "h", "H"],
        ['', "KeyJ", "о", "О", "j", "J"],
        ["", "KeyK", "л", "Л", "k", "K"],
        ['', "KeyL", "д", "Д", "l", "L"],
        ['', 'Semicolon', "ж", "Ж", ";", ":"],
        ["", "Quote", "э", "Э", "'", '"'],
        ['enter', "Enter", 'Enter', 'Enter', 'Enter', 'Enter']
    ],
    [
        ['shift', "Shift", 'Shift', 'Shift', 'Shift', 'Shift'],
        ['', "KeyZ", "я", "Я", "z", "Z"],
        ['', "KeyX", "ч", "Ч", "x", "X"],
        ['', "KeyC", "с", "С", "c", "C"],
        ['', "KeyV", "м", "М", "v", "V"],
        ['', "KeyB", "и", "И", "b", "B"],
        ['', "KeyN", "т", "Т", "n", "N"],
        ['', "KeyM", "ь", "Ь", "m", "M"],
        ['', "Comma", "б", "Б", ".", "<"],
        ['', "Period", "ю", "Ю", ",", ">"],
        ['', 'Slash', ".", ",", "/", "?"],
        ['', 'ArrowUp', "↑", "↑", "↑", "↑"],
        ['shift', "Shift", 'Shift', 'Shift', 'Shift', 'Shift']
    ],
    [
        ["ctrl", "Ctrl", 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ["win", 'Win', 'Win', 'Win', 'Win', 'Win'],
        ["alt", "Alt", "Alt", 'Alt', 'Alt', 'Alt'],
        ["space", "Space", " ", " ", '', ''],
        ["alt", "Alt", "Alt", 'Alt', 'Alt', 'Alt'],
        ["", 'ArrowLeft', "←", "←", "←", "←"],
        ['', "ArrowDown", "↓", "↓", "↓", "↓"],
        ['', 'ArrowRight', "→", "→", "→", "→"],
        ["ctrl", "Ctrl", 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
    ]
];

// Creating keyboard div container
let keys = [
    ["Backquote", "Digit1", "Minus", "Equal", "Backspace"]
];
let form = document.createElement("form");
form.className = "wrapper";
document.body.append(form);
let keyboard = document.createElement("div");
keyboard.className = "keyboard";
form.append(keyboard);

// Creating textaree 
let textarea = document.createElement("textarea");
textarea.className = "textarea";
form.append(textarea);
textarea.setAttribute("type", "textarea");

//KeyboardLanguage changing

let lang = localStorage.getItem('virtualKeyboardLang');
if (lang === null) {
    localStorage.setItem('virtualKeyboardLang', 'en');
}
document.addEventListener('keydown', function (evt) {
    if (evt.shiftKey && evt.altKey) {
        (lan === 'en') ? localStorage.setItem('virtualKeyboardLang', 'ru'): localStorage.setItem('virtualKeyboardLang', 'en');
        location.reload();
    }
});

let rowNumbers = [14, 15, 13, 13, 9];
for (let i = 0; i < 6; i++) {
    var row = document.createElement("div");
    row.className = "row";
    keyboard.append(row);

    for (let j = 0; j < rowNumbers[i]; j++) {
        let key = document.createElement("button");
        key.className = "key " + keyboardKeys[i][j][0];
        row.append(key);

        let spanEn = document.createElement("span");
        let spanEnUp = document.createElement("span");
        let spanEnDown = document.createElement("span");
        let spanRu = document.createElement("span");
        let spanRuUp = document.createElement("span");
        let spanRuDown = document.createElement("span");

        let [langOn, langOff] = [' on', ' off'];
        if (lang == 'en') {
            langOn = ' on';
            langOff = ' off';
        } else {
            langOn = ' off';
            langOff = ' on';
        }
        spanEn.className = keyboardKeys[i][j][1] + langOn;
        spanRu.className = keyboardKeys[i][j][1] + langOff;

        key.append(spanEn);
        key.append(spanRu);

        spanRuDown.className = 'case down';
        spanRu.append(spanRuDown);
        spanRuDown.insertAdjacentText("afterbegin", keyboardKeys[i][j][2]);

        spanRuUp.className = 'case up';
        spanRu.append(spanRuUp);
        spanRuUp.insertAdjacentText("afterbegin", keyboardKeys[i][j][3]);


        spanEnDown.className = 'case down';
        spanEn.append(spanEnDown);
        spanEnDown.insertAdjacentText("afterbegin", keyboardKeys[i][j][4]);

        spanEnUp.className = 'case up';
        spanEn.append(spanEnUp);
        spanEnUp.insertAdjacentText("afterbegin", keyboardKeys[i][j][5]);
    }
}

keyboard.addEventListener('click', function (evt) {
    let targetBtn = evt.target.closest('button');
    console.dir(targetBtn);

    targetLang = targetBtn.querySelector('.on');
    console.log(targetLang.className.split(' ')[0]);

    keyboardKeys.forEach(row => {
        row.forEach(el => {
            if (el == targetLang.className.split(' ')[0]) {

                console.dir('el =', el);
            }
        });
    });
});