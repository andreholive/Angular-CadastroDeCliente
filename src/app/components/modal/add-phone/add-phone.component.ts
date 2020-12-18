import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Phone } from 'src/app/models/phone.model';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent{

  phone: Phone = {
    id: null,
    number: null,
    info: null,
    client: null,
  }

  @Input() 
  reload: any;
  id: string;
  edit: boolean;
  function;

  constructor(public activeModal: NgbActiveModal, private phoneService: PhoneService) {
    console.log(this.id)
  }

  saveNumber(){
    if(this.edit){
    this.phone.client = parseInt(this.id);
    this.phoneService.create(this.phone).subscribe(()=>{
      this.activeModal.close('Close click');
      this.reload();
    });
    }
    else{
      this.function(this.phone);
      this.activeModal.close('Close click');
    }
  }

}