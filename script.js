/*
 * Copyright (c) 2024 Juan Uribe
 * 
 * Este archivo es parte de [Nombre del Proyecto].
 * 
 * [Nombre del Proyecto] está licenciado bajo la Licencia MIT.
 * 
 * 
 * Cómo usar

1. Abre el archivo `index.html` en tu navegador web.
2. Escribe tu mensaje en el campo de texto superior.
3. Ingresa un número de desplazamiento entre 1 y 25 en el campo numérico.
4. Haz clic en "Encriptar" para cifrar tu mensaje o "Desencriptar" para descifrar un mensaje encriptado.
5. El resultado aparecerá en el campo de texto inferior.
 */


function encrypt() {
    const input = document.getElementById('input').value;
    const password = document.getElementById('password').value;
    
    if (!input || !password) {
        alert('Por favor, ingrese tanto el texto como la contraseña.');
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(input, password).toString();
    document.getElementById('output').value = encrypted;
}

function decrypt() {
    const input = document.getElementById('input').value;
    const password = document.getElementById('password').value;
    
    if (!input || !password) {
        alert('Por favor, ingrese tanto el texto encriptado como la contraseña.');
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(input, password).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
            document.getElementById('output').value = decrypted;
        } else {
            throw new Error('Desencriptación fallida');
        }
    } catch (error) {
        alert('Error al desencriptar. Asegúrese de que el texto y la contraseña sean correctos.');
    }
}