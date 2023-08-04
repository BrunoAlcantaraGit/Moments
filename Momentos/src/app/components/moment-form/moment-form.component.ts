import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent {
@Input() btnText!: string //para o botão ter valor dinâmico precisa delcara no arquivo Ts, chamando o 
//input() chamando a variável declarada no html do componente , e tipando.
}
