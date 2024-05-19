import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activo'
      },
      {
        id: 2,
        nombre: 'Inactivo'
      },
      {
        id: 3,
        nombre: 'Deudores'
      }
    ];

    this.clientes = [];
  }

  getGrupos(): Grupo[] {
    return this.grupos;
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getCliente(id: number): Cliente {
    return this.clientes.find(cliente => cliente.id === id) as Cliente;
  }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  newCliente(): Cliente {
    return {
      id: this.clientes.length + 1,
      nombre: '',
      direccion: '',
      grupo: 0
    }
  }

  updateCliente(cliente: Cliente) {
    const index = this.clientes.findIndex(c => c.id === cliente.id);
    this.clientes[index] = cliente;
  }

  deleteCliente(id: number) {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    this.clientes.splice(index, 1);
  }
}
