import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {
  autores: any[] = [];
  novoAutor: any = { nomeAutor: '', sobrenomeAutor: '' };

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores(): void {
    this.crudService.getAutores().subscribe(
      (data) => {
        this.autores = data;
      },
      (error) => {
        console.error('Erro ao listar autores', error);
      }
    );
  }

  criarAutor(): void {
    if (this.novoAutor.nomeAutor.trim() && this.novoAutor.sobrenomeAutor.trim()) {
      this.crudService.criarAutor(this.novoAutor).subscribe(
        (data) => {
          // Apenas adicionar o novo autor à lista localmente para evitar uma nova solicitação de listagem
          this.autores.push(data);
          // Limpar o formulário de criação de autor
          this.novoAutor = { nomeAutor: '', sobrenomeAutor: '' };
        },
        (error) => {
          console.error('Erro ao criar autor', error);
        }
      );
    }
  }

  excluirAutor(id: number): void {
    this.crudService.excluirAutor(id).subscribe(
      () => {
        // Atualizar a lista de autores localmente para evitar uma nova solicitação de listagem
        this.autores = this.autores.filter(autor => autor.idAutor !== id);
      },
      (error: any) => {
        console.error('Erro ao excluir autor', error);
      }
    );
  }
}

