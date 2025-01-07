import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-items',
  standalone: true, 
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  imports: [CommonModule,FormsModule],
})
export class ItemsComponent {
  items: any[] = []; 
  newItem: { name: string; description: string } = { name: '', description: '' }; 
  errorMessage: string = ''; 
  editedItem: any | null = null; 
  constructor(private apiService: ApiService) {}

  //fetch item :-D and display
  ngOnInit() {
    this.fetchItems();
  }

 
  fetchItems() {
    this.apiService.getItems().subscribe({
      next: (data) => {
        this.items = data; 
      },
      error: (err) => {
        this.errorMessage = 'Failed to load items';
        console.error(err);
      },
    });
  }

  
  addItem() {
    if (!this.newItem.name || !this.newItem.description) {
      this.errorMessage = 'Name and description are required';
      return;
    }

    this.apiService.addItem(this.newItem).subscribe({
      next: (item) => {
        this.items.push(item); 
        this.newItem = { name: '', description: '' }; 
      },
      error: (err) => {
        this.errorMessage = 'Failed to add item';
        console.error(err);
      },
    });
  }


  deleteItem(id: number) {
    this.apiService.deleteItem(id).subscribe({
      next: () => {
        this.items = this.items.filter((item) => item.id !== id); 
      },
      error: (err) => {
        this.errorMessage = 'Failed to delete item';
        console.error(err);
      },
    });
  }
  
  editItem(item: any) {
    this.editedItem = { ...item }; 
  }

  updateItem() {
    if (!this.editedItem || !this.editedItem.name || !this.editedItem.description) {
      this.errorMessage = 'Name and description are required.';
      return;
    }
    this.apiService.updateItem(this.editedItem).subscribe(
      () => {
        this.fetchItems();
        this.editedItem = null;
      },
      (error) => (this.errorMessage = 'Failed to update item')
    );
  }

  cancelEdit() {
    this.editedItem = null; 
  }

}

