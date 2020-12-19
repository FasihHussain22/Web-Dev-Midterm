import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() details: string;

  detailsVisible: boolean = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  toggleDetails(){
    this.detailsVisible = !this.detailsVisible;
  }

  deleteItem(){
    this.itemsService.deleteItem(this.id);
  }

}
