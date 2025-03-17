import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PessoaComponent } from './componentes/pessoa/pessoa.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PessoaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
