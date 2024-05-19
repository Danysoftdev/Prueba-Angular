import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ClienteService } from './cliente.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';



@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    ClienteService
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }
