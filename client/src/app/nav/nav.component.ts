import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { UserParams } from '../_models/userParams';
import { AccountService } from '../_services/account.service';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  userParams: UserParams;


  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private memberService: MembersService) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
    })
  }

  logout() {
    this.userParams = this.memberService.resetUserParams();
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
