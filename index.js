/* eslint-disable prefer-destructuring */
/* eslint-disable no-case-declarations */
const keyboard = {
  elements: {
    main: null,
    textarea: null,
    keysContainer: null,
    keys: [],
  },

  properties: {
    value: '',
    capsLock: false,
    russian: false,
  },

  keyLayout: [
    ['`', 'ё', 'Backquote'],
    ['1', '1', 'Digit1'],
    ['2', '2', 'Digit2'],
    ['3', '3', 'Digit3'],
    ['4', '4', 'Digit4'],
    ['5', '5', 'Digit5'],
    ['6', '6', 'Digit6'],
    ['7', '7', 'Digit7'],
    ['8', '8', 'Digit8'],
    ['9', '9', 'Digit9'],
    ['0', '0', 'Digit0'],
    ['-', '-', 'Minus'],
    ['=', '=', 'Equal'],
    ['Backspace', 'Backspace', 'Backspace'],
    ['Tab', 'Tab', 'Tab'],
    ['q', 'й', 'KeyQ'],
    ['w', 'ц', 'KeyW'],
    ['e', 'у', 'KeyE'],
    ['r', 'к', 'KeyR'],
    ['t', 'е', 'KeyT'],
    ['y', 'н', 'KeyY'],
    ['u', 'г', 'KeyU'],
    ['i', 'ш', 'KeyI'],
    ['o', 'щ', 'KeyO'],
    ['p', 'з', 'KeyP'],
    ['[', 'х', 'BracketLeft'],
    [']', 'ъ', 'BracketRight'],
    ['\\', '|', 'Backslash'],
    ['CapsLock', 'CapsLock', 'CapsLock'],
    ['a', 'ф', 'KeyA'],
    ['s', 'ы', 'KeyS'],
    ['d', 'в', 'KeyD'],
    ['f', 'а', 'KeyF'],
    ['g', 'п', 'KeyG'],
    ['h', 'р', 'KeyH'],
    ['j', 'о', 'KeyJ'],
    ['k', 'л', 'KeyK'],
    ['l', 'д', 'KeyL'],
    [';', 'ж', 'Semicolon'],
    ["'", 'э', 'Quote'],
    ['Enter', 'Enter', 'Enter'],
    ['Shift', 'Shift', 'ShiftLeft'],
    ['z', 'я', 'KeyZ'],
    ['x', 'ч', 'KeyX'],
    ['c', 'с', 'KeyC'],
    ['v', 'и', 'KeyV'],
    ['b', 'и', 'KeyB'],
    ['n', 'т', 'KeyN'],
    ['m', 'ь', 'KeyM'],
    [',', 'б', 'Comma'],
    ['.', 'ю', 'Period'],
    ['/', '/', 'Slash'],
    ['Control', 'Control', 'ControlLeft'],
    ['Alt', 'Alt', 'AltLeft'],
    ['Space', 'Space', 'Space'],
    ['Alt', 'Alt', 'AltRight'],
    ['Control', 'Control', 'ControlRight'],
  ],

  // Create textarea
  initTextarea() {
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.classList.add('keyboard-input');
    document.body.appendChild(this.elements.textarea);
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys(this.properties.russian));

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
    if (keyboard.properties.russian === false) {
      localStorage.setItem('lang', 'false');
    }
    if (keyboard.properties.russian === true) {
      localStorage.setItem('lang', 'true');
    }
  },


  _createKeys() {
    const fragment = document.createDocumentFragment();
    // en | ru | code

    this.keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', '\\', 'Enter', '/'].indexOf(key[0]) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      // Every button have date attribute(with code)
      keyElement.setAttribute('data-key', `${key[2]}`);

      switch (key[0]) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Backspace</span>';

          keyElement.addEventListener('click', () => {
            this.properties.value = document.querySelector('.keyboard-input').value;
            this.properties.value = this.properties.value
              .slice(0, this.properties.value.length - 1);
            document.querySelector('.keyboard-input').value = this.properties.value;
          });

          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Tab</span>';

          keyElement.addEventListener('click', () => {
            this.properties.value = document.querySelector('.keyboard-input').value;
            this.properties.value += '\t';
            document.querySelector('.keyboard-input').value = this.properties.value;
          });

          break;

        case 'CapsLock':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>CapsLock</span>';

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
          });

          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Enter</span>';

          keyElement.addEventListener('click', () => {
            this.properties.value = document.querySelector('.keyboard-input').value;
            this.properties.value += '\n';
            document.querySelector('.keyboard-input').value = this.properties.value;
          });

          break;

        case 'Shift':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Shift</span>';

          break;

        case 'Control':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Control</span>';

          break;

        case 'Alt':
          keyElement.classList.add('keyboard__key_service');
          keyElement.innerHTML = '<span>Alt</span>';

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key_space');
          keyElement.innerHTML = '<span> </span>';

          keyElement.addEventListener('click', () => {
            this.properties.value = document.querySelector('.keyboard-input').value;
            this.properties.value += ' ';
            document.querySelector('.keyboard-input').value = this.properties.value;
          });

          break;

        default: {
          let lenguageLetter;
          if (!this.properties.russian) {
            lenguageLetter = key[0];
          } else {
            lenguageLetter = key[1];
          }

          keyElement.textContent = lenguageLetter.toLowerCase();

          keyElement.addEventListener('click', () => {
            if (this.properties.capsLock) {
              this.properties.value = document.querySelector('.keyboard-input').value;
              this.properties.value += lenguageLetter.toUpperCase();
            } else {
              this.properties.value = document.querySelector('.keyboard-input').value;
              this.properties.value += lenguageLetter.toLowerCase();
            }

            document.querySelector('.keyboard-input').value = this.properties.value;
          });

          break;
        }
      }
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br')); // add br after some keys
      }
    });

    return fragment;
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    this.elements.keys.forEach((key) => {
      const myKey = key;
      if (myKey.childElementCount === 0) {
        if (this.properties.capsLock) {
          myKey.textContent = myKey.textContent.toUpperCase();
        } else {
          myKey.textContent = myKey.textContent.toLowerCase();
        }
      }
    });
  },
};


document.addEventListener('keydown', (event) => {
  // Use date attribute
  const key = document.querySelector(`button[data-key='${event.code}']`);
  event.preventDefault();
  switch (event.code) {
    case 'Backspace':
      keyboard.properties.value = document.querySelector('.use-keyboard-input').value;
      keyboard.properties.value = keyboard.properties.value
        .slice(0, keyboard.properties.value.length - 1);
      document.querySelector('.use-keyboard-input').value = keyboard.properties.value;
      break;

    case 'Tab':
      document.querySelector('.use-keyboard-input').value += '\t';
      break;

    case 'CapsLock':
      keyboard._toggleCapsLock.call(keyboard);
      return;

    case 'Enter':
      document.querySelector('.use-keyboard-input').value += '\n';
      // keyboard.properties.value = document.querySelector('.use-keyboard-input');
      break;

    case 'ShiftLeft':
      keyboard._toggleCapsLock.call(keyboard);
      // key.classList.add('keyboard__key_activeted');
      break;

    case 'ControlLeft':
    case 'ControlRight':
    case 'AltLeft':
    case 'AltRight':
      break;

    case 'Space':
      document.querySelector('.keyboard-input').value += ' ';
      break;

    default:
      keyboard.keyLayout.forEach((item) => {
        if (item[2] === event.code) {
          if (!keyboard.properties.russian) { // english
            if (!keyboard.properties.capsLock) {
              document.querySelector('.keyboard-input').value += item[0].toLowerCase();
            }
            if (keyboard.properties.capsLock) {
              document.querySelector('.keyboard-input').value += item[0].toUpperCase();
            }
          } else { // russian
            if (!keyboard.properties.capsLock) {
              document.querySelector('.keyboard-input').value += item[1].toLowerCase();
            }
            if (keyboard.properties.capsLock) {
              document.querySelector('.keyboard-input').value += item[1].toUpperCase();
            }
          }
        }
      });
  }


  key.classList.add('keyboard__key_activeted');
});

document.addEventListener('keyup', (event) => {
  const key = document.querySelector(`button[data-key='${event.code}']`);
  if (event.code === 'ShiftLeft') {
    keyboard._toggleCapsLock.call(keyboard);
  }
  key.classList.remove('keyboard__key_activeted');
});


function runOnKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);


    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }

    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => {
    keyboard.properties.russian = !keyboard.properties.russian;

    document.querySelector('.keyboard').remove();
    keyboard.init();
  },
  'ShiftLeft',
  'AltLeft',
);

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('lang') === 'false') {
    keyboard.properties.russian = false;
  }
  if (localStorage.getItem('lang') === 'true') {
    keyboard.properties.russian = true;
  }
  keyboard.initTextarea();
  keyboard.init();
});