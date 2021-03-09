import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] =[

    {id:1, nombre: 'César', apellido: 'Carvajal', email: 'cesar@gmail.com', createAt: '1997-26-10'},
    {id:2, nombre: 'Andres', apellido: 'Gelves', email: 'andres@gmail.com', createAt: '1998-20-10'},
    {id:3, nombre: 'Javier', apellido: 'Moncada', email: 'pacho@gmail.com', createAt: '1997-16-05'},
    {id:4, nombre: 'Jarbir', apellido: 'Mejia', email: 'jarbir@gmail.com', createAt: '1998-16-12'},
    {id:5, nombre: 'Brayan', apellido: 'Palomino', email: 'palo@gmail.com', createAt: '1996-28-10'},
    {id:6, nombre: 'Camilo', apellido: 'Boada', email: 'boada@gmail.com', createAt: '1995-17-03'},
    {id:7, nombre: 'Carlos', apellido: 'Pablos', email: 'pablos@gmail.com', createAt: '1997-06-11'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
