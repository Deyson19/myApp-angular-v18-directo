import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UsersComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  public usuarios: WritableSignal<Users[]> = signal([]);
  ngOnInit(): void {
    this._usersService.getUsers().subscribe((x) => {
      this.usuarios.set(x);
    });
  }
}
