import { Injectable } from '@angular/core';
import { generate } from 'shortid';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  homeActive: boolean = true;
  items: { id: string; name: string; details: string }[] = [
    {
      id: '1',
      name: 'Item 1',
      details: 'This is item 1'
    },
    {
      id: '2',
      name: 'Item 2',
      details: 'This is item 2'
    }
  ];

  constructor() { }

  addItem(name: string, details: string){
    this.items.push({ id: generate(), name: name, details: details });
    return 0;
  }

  deleteItem(id: string){
    for (let i = 0; i < this.items.length; i++){
      if (this.items[i].id === id){
        this.items.splice(i, 1);
        return 0;
      }
    }
    return -1;
  }

}
