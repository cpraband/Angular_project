import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login(username: string, password: string): boolean {
    username = username.trim();
    password = password.trim();
    if (!username || !password) return false;
    else if (username == 'admin' && password == 'admin') return true;
    else return false;
  }
}
