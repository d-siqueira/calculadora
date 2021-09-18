import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  log: string = '';
  resultado: string = '';

  inserirOperacao(operacao: string): void {
    this.resultado += operacao;
  }

  calcularOperacao(): void {
    this.log = this.resultado;
    this.resultado = eval(this.resultado);
  }

  limparOperacao(): void {
    this.resultado = '';
  }
}
