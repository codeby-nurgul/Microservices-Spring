import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  productsData: any;
  errorMsg: string = '';
  http = inject(HttpClient);

  login() {
    window.location.href = '/oauth2/authorization/keycloak';
  }

  logout() {
    this.http.post('/logout', {}, { observe: 'response', withCredentials: true }).subscribe({
      next: (res) => {
        if (res.headers.get('Location')) {
          window.location.href = res.headers.get('Location')!;
        } else {
          window.location.reload();
        }
      },
      error: (err) => {
        console.error('Logout error', err);
        // CORS or opaque response might trigger error even on success, so let's check
        if (err.status === 200 && err.url) {
           window.location.href = err.url;
        }
      }
    });
  }

  fetchProducts() {
    this.errorMsg = '';
    this.productsData = null;
    this.http.get('/api/v1/products?message=BFF Test', { responseType: 'text', withCredentials: true }).subscribe({
      next: (data) => {
        this.productsData = data;
      },
      error: (err) => {
        if (err.status === 401 || err.status === 0 || err.status === 302) {
          this.errorMsg = 'Giriş yapmanız gerekiyor. (Yetkisiz istek)';
        } else {
          this.errorMsg = 'Hata oluştu: ' + err.message;
        }
      }
    });
  }
}
