import { Routes } from '@angular/router';
import { PessoaComponent } from './componentes/pessoa/pessoa.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { //Configuração das Rotas para qual componente você quer, importando um componente
        path: "",
        component: AppComponent
    },
    {
        path: "pessoa",
        component: PessoaComponent
    }
];
