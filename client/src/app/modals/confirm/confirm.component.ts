import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  title: string;
  message: string;
  btnOkText: string;
  btnCancelText: string;
  result: boolean;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm(){
    this.result = true;
    this.bsModalRef.hide();
  }
  cancel(){
    this.result = false;
    this.bsModalRef.hide();
  }

}