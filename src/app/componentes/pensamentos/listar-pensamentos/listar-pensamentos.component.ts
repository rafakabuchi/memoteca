import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent {
  listaPensamentos = [
    {
      conteudo: 'passo informações para o componente filho',
      autoria: 'componente pai',
      modelo: 'modelo2',
    },
    {
      conteudo: 'minha propriedade é decorada com @input',
      autoria: 'componente filho',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'sem autoria',
      modelo: 'modelo1',
    },
  ];
}
