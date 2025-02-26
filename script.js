class SerieCadastro {
    constructor(nome, atores, nota, genero) {
        this.nome = nome;
        this.atores = atores;
        this.nota = nota;
        this.genero = genero;
    }
}

class Cadastro {
    constructor() {
        this.series = [];
    }

    adicionarSerie(nome, atores, nota, genero) {
        const serie = new SerieCadastro(nome, atores, nota, genero);
        this.series.push(serie);
        this.atualizarTabela();
    }

    removerSerie(index) {
        this.series.splice(index, 1);
        this.atualizarTabela();
    }

    editarSerie(index, nome, atores, ano, genero) {
        this.series[index].nome = nome;
        this.series[index].atores = atores;
        this.series[index].nota = nota;
        this.series[index].genero = genero;
        this.atualizarTabela();
    }

    atualizarTabela() {
        const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';

        this.series.forEach((serie, index) => {
            const row = tabela.insertRow();
            const cellNome = row.insertCell(0);
            const cellAtores = row.insertCell(1);
            const cellNota = row.insertCell(2);
            const cellGenero = row.insertCell(3);
            const cellAcoes = row.insertCell(4);

            cellNome.textContent = serie.nome;
            cellAtores.textContent = serie.atores;
            cellAno.textContent = serie.nota;
            cellGenero.textContent = serie.genero;


            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.classList.add('edit');
            btnEditar.addEventListener('click', () => {
                this.editarSerie(index,
                    prompt("Novo nome:", serie.nome),
                    prompt("Novos atores principais:", serie.atores),
                    prompt("Nova  nota de 0-10:", serie.nota),
                    prompt("Novo gênero:", serie.genero)
                );
            });

            const btnDeletar = document.createElement('button');
            btnDeletar.textContent = 'Remover';
            btnDeletar.classList.add('delete');
            btnDeletar.addEventListener('click', () => {
                if (confirm("Tem certeza que deseja remover esta série?")) {
                    this.removerSerie(index);
                }
            });

            cellAcoes.appendChild(btnEditar);
            cellAcoes.appendChild(btnDeletar);
        });
    }
}

const cadastro = new Cadastro();

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeSerie').value;
    const personagens = document.getElementById('atorPrincipal').value;
    const ano = document.getElementById('notaDeZeroADez').value;
    const genero = document.getElementById('genero').value;

    if (nome && personagens && ano && genero) {
        cadastro.adicionarSerie(nome, personagens, ano, genero);
        document.getElementById('nomeSerie').value = '';
        document.getElementById('atorPrincipal').value = '';
        document.getElementById('notaDeZeroADez').value = '';
        document.getElementById('genero').value = '';
    }

});


