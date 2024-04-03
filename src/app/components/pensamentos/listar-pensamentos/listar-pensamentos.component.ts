import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Teste1',
      autoria: 'Reynaldo',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Teste2',
      autoria: 'Reynaldo',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.      Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.',
      autoria: 'Paloma',
      modelo: 'modelo1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
