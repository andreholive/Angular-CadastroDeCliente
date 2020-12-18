import { ClientService } from './../../../services/client.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()
  reload: any;
  client_id: number;
  
  constructor(public activeModal: NgbActiveModal, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  delete(){
    this.clientService.delete(this.client_id).subscribe(()=>{
      this.activeModal.close('Close click');
      this.reload();
    });
  }

}
