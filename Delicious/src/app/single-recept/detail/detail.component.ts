import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  recept: Recept | undefined;
  currentRecept = '';
  userId = '';
  isOwner: boolean = false;

  constructor(private apiService: ApiService,
    private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.setProfile().subscribe((user: any) => {
      this.userId = user._id;
    })

    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getOneRecept(id).subscribe((rec: any) => {
      this.recept = rec;
      this.currentRecept = rec._ownerId;

      this.isOwner = this.currentRecept === this.userId;
    })

  }

  delete(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.deleteRecept(id).subscribe();
    this.router.navigate(['/main-recept']);
  }

}
