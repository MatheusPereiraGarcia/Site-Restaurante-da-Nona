document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contato form");


    const phoneInput = document.querySelector("#phone");

    // Máscara do telefone
    phoneInput.addEventListener("input", function () {
        let value = phoneInput.value.replace(/\D/g, ""); // remove tudo que não é número
        if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos

        if (value.length > 6) {
            phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            phoneInput.value = `(${value}`;
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const telefone = document.querySelector("#phone").value.trim();
        const mensagem = document.querySelector("#message").value.trim();

        // expressão regular simples para validar e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // validar telefone
        const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

        // validações básicas
        if (nome.length < 3) {
            alert("Por favor, digite seu nome completo (mínimo 3 caracteres).");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, digite um e-mail válido.");
            return;
        }

        if (telefone && !telefoneRegex.test(telefone)) {
            alert("Por favor, digite um telefone válido. Ex: (11) 91234-5678");
            return;
        }

        if (mensagem.length < 10) {
            alert("Sua mensagem deve ter pelo menos 10 caracteres.");
            return;
        }

        // se tudo estiver ok
        alert(`Mensagem enviada com sucesso! Obrigado pelo contato, ${nome} 😊`);

        form.reset();
    });
});