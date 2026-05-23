document.addEventListener("DOMContentLoaded", function () {

    let formLogin = document.getElementById("form-login");

    let formCadastro = document.getElementById("form-cadastro");

    // LOGIN
    if (formLogin) {

        formLogin.onsubmit = (e) => {

            e.preventDefault();

            let email = document.getElementById("email").value.trim();

            let senha = document.getElementById("senha").value.trim();

            let mensagem = document.getElementById("mensagem");

            let salva = localStorage.getItem(email);

            if (salva === senha) {

                mensagem.innerHTML =
                    "<div class='sucesso'>Logado com sucesso!</div>";
                    window.location.href = "pagina.html";

            } else {

                mensagem.innerHTML =
                    "<div class='erro'>Dados incorretos!</div>";
            }

            formLogin.reset();
        };
    }

    // CADASTRO
    if (formCadastro) {

        formCadastro.onsubmit = (e) => {

            e.preventDefault();

            let email = document.getElementById("email").value.trim();

            let senha = document.getElementById("senha").value.trim();

            let mensagem = document.getElementById("mensagem");

            if (localStorage.getItem(email)) {

                mensagem.innerHTML =
                    "<div class='erro'>Usuário já existe!</div>";

                return;
            }

            localStorage.setItem(email, senha);

            mensagem.innerHTML =
                "<div class='sucesso'>Cadastro realizado!</div>";

            formCadastro.reset();
        };
    }
});