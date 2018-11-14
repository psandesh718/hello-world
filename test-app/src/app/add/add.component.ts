import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	@Output() closeAddUser = new EventEmitter<any>();
	@Output() createUser = new EventEmitter<any>();
	
	userObj:any = {};
	
	constructor() { }
	
	ngOnInit() {
		
	}
	
	
	close(iEvent){
		iEvent && iEvent.stopPropagation();
		this.closeAddUser.emit();
	}
	
	create(iEvent){
		iEvent && iEvent.stopPropagation();
		this.createUser.emit(this.userObj);
		this.closeAddUser.emit();
	}
	
	
}
