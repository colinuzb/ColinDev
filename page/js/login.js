document.addEventListener('DOMContentLoaded', () => {


    const wrapper = document.querySelector('.login-wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');


    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.add('active');
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.remove('active'); // 'active' styleni o'chiradi
        });
    }

    // --- MENYU (TELEFON UCHUN) ---
    const navLinks = document.querySelectorAll('.navbar-web a');
    const checkInput = document.getElementById('check');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(checkInput && checkInput.checked) {
                checkInput.checked = false;
            }
        });
    });


    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("𝐌𝐚❜𝐥𝐮𝐦𝐨𝐭𝐥𝐚𝐫𝐧𝐢 𝐘𝐮𝐛𝐨𝐫𝐢𝐥𝐝𝐢... 𝐃𝐚𝐬𝐭𝐮𝐫 𝐓𝐞𝐬𝐭 𝐇𝐨𝐥𝐚𝐭𝐢𝐝𝐚❗");
        });
    });
});
