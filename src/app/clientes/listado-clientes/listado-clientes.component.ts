import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  protected clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
    this.clientes = [];
  }
  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }



}
