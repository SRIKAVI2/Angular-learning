import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User  {
  avatar: string;
  id: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];

  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() id!: string;
  @Input({required: true}) user!: User;
  @Output() select =new EventEmitter<string>();
name: any;

  get imagePath(){
    return 'assets/users/'+ this.user.avatar;
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
    
  }
  
}

