import { Users } from './../../interfaces/users.interface';
import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export default class UserComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _usersService = inject(UsersService);
  public usuario: WritableSignal<Users | null> = signal(null);
  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this._usersService.getUser(Number.parseInt(id)).subscribe({
        next: (x) => {
          this.usuario.set(x);
        },
        error: () => {
          this._router.navigate(['/users']);
        },
      });
    }
  }
}
