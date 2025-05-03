import { Component, OnInit } from '@angular/core';
import { BookService, Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  message: string = '';

  // Pour le formulaire
  newTitre: string = '';
  newAuteur: string = '';

  // Pour la modification
  editingBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (result) => {
        this.books = result;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des livres :', err);
        this.message = 'Erreur lors de la récupération des livres.';
      }
    });
  }

  addBook(): void {
    if (!this.newTitre.trim() || !this.newAuteur.trim()) {
      alert('Veuillez remplir le titre et l’auteur.');
      return;
    }

    const newBook: Book = { titre: this.newTitre, auteur: this.newAuteur, disponible: true };
    this.bookService.addBook(newBook).subscribe({
      next: () => {
        this.getBooks();
        this.newTitre = '';
        this.newAuteur = '';
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout :', err);
        this.message = 'Erreur lors de l’ajout du livre.';
      }
    });
  }

  editBook(book: Book): void {
    this.editingBook = { ...book };
  }

  saveBook(): void {
    if (this.editingBook) {
      this.bookService.updateBook(this.editingBook.id!, this.editingBook).subscribe({
        next: () => {
          this.getBooks();
          this.editingBook = null;
        },
        error: (err) => {
          console.error('Erreur lors de la modification :', err);
          this.message = 'Erreur lors de la modification du livre.';
        }
      });
    }
  }

  deleteBook(id: number | undefined): void {
    if (id === undefined) return;

    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          this.getBooks();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
          this.message = 'Erreur lors de la suppression du livre.';
        }
      });
    }
  }
}
