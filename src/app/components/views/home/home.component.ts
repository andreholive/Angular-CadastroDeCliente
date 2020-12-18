import { DeleteComponent } from './../../modal/delete/delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: Client[];
  constructor(
    private router: Router, 
    private clientService: ClientService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
  this.clientService.read().subscribe(clients => {
    this.clients = clients
    console.log(this.clients)
  })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/client/create'])
  }

  deleteClient(id: number) {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.client_id = id;
    modalRef.componentInstance.reload = () => {this.getData()};;
  }

}
