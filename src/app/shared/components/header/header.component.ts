import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartCount : number = 2;
  isLoggedIn : boolean = false;
  userInitial : string = 'U';
  username : string = 'user';
  userRole : string = "";

  ngOnInit(): void {
    
  }
  onsearch(){}

  logout(){}
}
