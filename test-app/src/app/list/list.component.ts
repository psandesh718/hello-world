import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	
	usersArr = [{ID:231,TITLE:'Sandesh Satish Patil',DESIGNATION:'Jr. Engineer',CONTACT:9096132619}];
	addUserFlag = false;
	constructor() { }
	
	ngOnInit() {
		
	}
	
	addUser(iEvent){
		iEvent && iEvent.stopPropagation();
		this.addUserFlag = true;
	}
	
	closeAddUser(){
		this.addUserFlag = false;
	}
	
	createUser(iObj){
		this.usersArr.push(iObj);
	}

}
