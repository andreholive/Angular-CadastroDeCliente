import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-main-address',
  templateUrl: './main-address.component.html',
  styleUrls: ['./main-address.component.css']
})
export class MainAddressComponent implements OnInit {

  @Input() 
  id: string;
  confirmAction;
  cancelAction;
  constructor(
    public activeModal: NgbActiveModal, 
    private addressService: AddressService
    ) { }

  ngOnInit(): void {
  }

  confirm(){
    this.activeModal.close('Close click');
    this.confirmAction();
  }

  cancel(){
    this.activeModal.close('Close click');
    this.cancelAction();
  }
}
