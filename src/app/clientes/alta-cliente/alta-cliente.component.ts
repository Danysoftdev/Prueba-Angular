import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente, Grupo } from '../cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  protected cliente: Cliente;
  protected grupos: Grupo[];

  constructor(private clienteService: ClienteService){
    this.cliente = this.clienteService.newCliente();
    this.grupos = []
  }

  ngOnInit(): void {
    this.cliente = this.clienteService.newCliente();
    this.grupos = this.clienteService.getGrupos();
  }

  newCliente(): void {
    this.clienteService.addCliente(this.cliente);
    this.cliente = this.clienteService.newCliente();
  }

}
