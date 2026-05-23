document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".task-form");
    const input = form.querySelector("input");
    const listaTarefas = document.querySelector(".tarefas");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const texto = input.value.trim();

        // impede tarefa vazia
        if (texto === "") {
            return;
        }

        // cria div da tarefa
        const novaTarefa = document.createElement("div");
        novaTarefa.classList.add("tarefa");

        // cria texto
        const p = document.createElement("p");
        p.textContent = texto;

        // cria botão
        const botao = document.createElement("button");
        botao.textContent = "Excluir";

        botao.classList.add("btn");
        botao.classList.add("btn-danger");

        // botão excluir
        botao.addEventListener("click", () => {
            novaTarefa.remove();
        });

        // adiciona elementos
        novaTarefa.appendChild(p);
        novaTarefa.appendChild(botao);

        listaTarefas.appendChild(novaTarefa);

        // limpa input
        input.value = "";

    });

});