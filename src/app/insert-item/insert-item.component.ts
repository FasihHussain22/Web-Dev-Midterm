import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.css']
})
export class InsertItemComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('details') details: ElementRef;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  addItem(){
    if (this.name.nativeElement.value.length != 0 && this.details.nativeElement.value.length != 0){
      this.itemsService.addItem(this.name.nativeElement.value, this.details.nativeElement.value);
      this.name.nativeElement.value = '';
      this.details.nativeElement.value = '';
    }
  }

}
