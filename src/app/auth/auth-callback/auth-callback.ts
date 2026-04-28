import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Logging in...</p>`
})
export class AuthCallbackComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const token = params['token'];
    const email = params['email'];

    if (token) {
      localStorage.setItem('token', token);

      if (email) {
        localStorage.setItem('email', email);
      }

      // ✅ IMPORTANT: replaceUrl
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    } else {
      this.router.navigate(['/auth'], { replaceUrl: true });
    }
  });
}
}