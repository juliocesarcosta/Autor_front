import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:8080/api/autores'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  getAutores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  criarAutor(autor: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, autor);
  }

  excluirAutor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


