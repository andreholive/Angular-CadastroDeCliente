import { Client } from 'src/app/models/client.model';
import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/models/phone.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPhoneComponent } from '../../modal/add-phone/add-phone.component';
import { AddAddressComponent } from '../../modal/add-address/add-address.component';
import { Address } from 'src/app/models/address.model';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}
];

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id: null,
    nome: null,
    cpf: null,
    cnpj: null,
    user: 1, //hard coded
    enderecos: [],
    phones: []
  }

  alerts: Alert[] = [];

  

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  createClient(): void{
    this.clientService.create(this.client).subscribe((client)=>{
      this.router.navigate(['/']);
    });
  }

  addPhoneToNewClient(phone: Phone){
    this.client.phones.push(phone);
  }

  addAddressToNewClient(addr: Address){
    this.client.enderecos.push(addr);
    console.log(this.client)
  }

  openPhoneModal() {
    const modalRef = this.modalService.open(AddPhoneComponent);
    modalRef.componentInstance.function = (phone: Phone) => this.addPhoneToNewClient(phone);
    modalRef.componentInstance.edit = false;
  }

  openAddressModal() {
    const modalRef = this.modalService.open(AddAddressComponent);
    modalRef.componentInstance.function = (addr: Address) => this.addAddressToNewClient(addr);
    modalRef.componentInstance.edit = false;
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

}
