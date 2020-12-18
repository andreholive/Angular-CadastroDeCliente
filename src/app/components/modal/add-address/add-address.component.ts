import { AddressService } from './../../../services/address.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'src/app/models/address.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent{

  address: Address = {
    id: null,
    rua: null,
    bairro: null,
    cidade: null,
    estado: null,
    cep: null,
    main: false,
    client: null
}

  @Input() 
  reload: any;
  id: string;
  edit: boolean;
  function;

  constructor(
    public activeModal: NgbActiveModal, 
    private addressService: AddressService,
    private route: ActivatedRoute
    ) {
      
     }

  saveAddress(){
    
      if(this.edit){
      this.address.client = parseInt(this.id);
        this.addressService.create(this.address).subscribe(()=>{
          this.modalClose();
          this.reload();
        });
      }
      else{
        this.function(this.address);
        this.modalClose();
      }
    
    
  }

  modalClose(){
    this.activeModal.close('Close click');
  }

}
