import { Component, inject } from '@angular/core';
import { EnviaNomeService } from '../../services/envia-nome.service';

@Component({
	selector: 'app-pessoa',
	imports: [],
	templateUrl: './pessoa.component.html',
	styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
	meuNome = "Evandro Campos Teixeira Pires";
	ativo = true;
	atributo_nome = "teste_01";
	arial_label = "arial";
	attr_teste = "attr_teste";
	teste_02 = "attr-teste";
	nomes = [{ id: 1, nome: "Evandro Campos" }, { id: 2, nome: "Douglas Campos" }]

	atualizarNome(valor: string) {
		this.meuNome = valor;
	}

	atualizarPessoa(valor: boolean) {
		this.ativo = valor;
	}

	pegarAtivo() {
		return this.ativo;
	}

	escreverNomes() {
		this.nomes.forEach(element => {
			const div = document.getElementById("nome");
			const p = document.createElement("p");
			p.textContent = element.nome;
			div?.appendChild(p);
		});
	}

	private enviarNome = inject(EnviaNomeService);
	enviarNomeSubmit() {
		this.enviarNome.enviarNomesBackEnd([{ id: 1, nome: "Teste 01" }, { id: 2, nome: "Teste 02" }]);
	}
}
