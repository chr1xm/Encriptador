const textInput = document.getElementById('textInput');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const outputLabel = document.getElementById('outputLabel');

// Add event listeners
textInput.addEventListener('focus', () => {
  if (textInput.value !== '') {
    textInput.select();
  }
});

textInput.addEventListener('input', () => {
  if (textInput.value === '') {
    outputLabel.textContent = 'Ningún mensaje fue encontrado';
    outputLabel.style.backgroundColor = ''; // reset background color
  }
});

encryptBtn.addEventListener('click', () => {
  const text = textInput.value.trim(); // trim whitespace
  if (text === '') {
    alert('Por favor ingresa algo para encriptar!');
    return;
  }
  const encryptedText = encrypt(text);
  outputLabel.textContent = encryptedText;
  outputLabel.style.backgroundColor = '#cff'; // indicate success
});

decryptBtn.addEventListener('click', () => {
  const text = textInput.value.trim(); // trim whitespace
  if (text === '') {
    alert('Por favor ingresa algo para desencriptar!');
    return;
  }
  const decryptedText = decrypt(text);
  outputLabel.textContent = decryptedText;
  outputLabel.style.backgroundColor = '#cff'; // indicate success
});

// Encryption and decryption functions
function encrypt(text) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encryptedText += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encryptedText += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
    } else {
      // Non-alphabetic characters remain unchanged
      encryptedText += text[i];
    }
  }
  return encryptedText;
}

function decrypt(text) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      decryptedText += String.fromCharCode((charCode - 65 - 3 + 26) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      decryptedText += String.fromCharCode((charCode - 97 - 3 + 26) % 26 + 97);
    } else {
      // Non-alphabetic characters remain unchanged
      decryptedText += text[i];
    }
  }
  return decryptedText;
}