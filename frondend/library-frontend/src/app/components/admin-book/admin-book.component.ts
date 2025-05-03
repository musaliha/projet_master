import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.css']
})
export class AdminBookComponent {
  titre: string = '';
  auteur: string = '';
  message: string = '';

  constructor(private bookService: BookService) {}

  addBook(): void {
    if (!this.titre.trim() || !this.auteur.trim()) {
      this.message = '❗ Veuillez remplir le titre et l’auteur.';
      return;
    }

    const newBook: Book = {
      titre: this.titre,
      auteur: this.auteur,
      disponible: true
    };

    this.bookService.addBook(newBook).subscribe({
      next: (result) => {
        this.message = `✅ Livre ajouté : ${result.titre} par ${result.auteur}`;
        this.titre = '';
        this.auteur = '';
      },
      error: (err) => {
        console.error('❌ Erreur lors de l’ajout du livre :', err);
        this.message = 'Erreur lors de l’ajout du livre.';
      }
    });
  }
}
