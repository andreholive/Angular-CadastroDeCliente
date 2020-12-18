import { AddressService } from './../../../services/address.service';
import { AddAddressComponent } from './../../modal/add-address/add-address.component';
import { ClientService } from './../../../services/client.service';
import { Client } from 'src/app/models/client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPhoneComponent } from '../../modal/add-phone/add-phone.component'
import { MainAddressComponent } from '../../modal/main-address/main-address.component';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: Client
  locked: boolean = true;
  mainId = null;
  public isCollapsed = true;

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private addressService: AddressService
    ) { }

  ngOnInit(): void {
    this.getData()
  }

  checkMainAddress(){
    this.client.enderecos.forEach(endereco => {
      endereco.main ? this.mainId = endereco.id : null;
      console.log(endereco.main, endereco.id)
    })
    
  }

  getData(){
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client;
      this.checkMainAddress();
    })
  }

  deleteClient(): void{
    this.clientService.delete(this.client.id).subscribe(()=>{
      this.router.navigate(['/'])
    });
  }

  lockAndUnlockFields(){
    this.locked = !this.locked;
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

  addPhone() {
    const modalRef = this.modalService.open(AddPhoneComponent);
    modalRef.componentInstance.reload = () => {this.getData()};
    modalRef.componentInstance.id = this.route.snapshot.paramMap.get('id');
    modalRef.componentInstance.edit = true;
  }

  addAddress() {
    const modalRef = this.modalService.open(AddAddressComponent);
    modalRef.componentInstance.reload = () => {this.getData()};
    modalRef.componentInstance.id = this.route.snapshot.paramMap.get('id');
    modalRef.componentInstance.edit = true;
  }

  resetAllMainAddress(){
    this.client.enderecos.forEach(endereco => {
      endereco.main=false;
    })
  }

  setMainAddress(addr: Address){
    const modalRef = this.modalService.open(MainAddressComponent);
    modalRef.componentInstance.id = addr.id;
    modalRef.componentInstance.confirmAction = () => {
      this.mainId = addr.id;
      this.resetAllMainAddress();
      let index = this.client.enderecos.indexOf(addr);
      this.client.enderecos[index].main = true;
      this.addressService.update(this.client.enderecos[index]).subscribe(()=>{
        alert("endereço principal alterado!")
      });
    }
    modalRef.componentInstance.cancelAction = () => {this.mainId = this.mainId}
  }

  
}
