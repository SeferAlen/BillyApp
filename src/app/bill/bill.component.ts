import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../interface/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {

  @Input() username: string;
  @Input() bills: Bill[];
  sliderValue: number;
  maxValue: number;

  constructor() { 
    this.sliderValue = 0;
  }

  ngOnInit() {
    this.findMax();
  }

  findMax() {
    this.maxValue = 0;
    this.bills.forEach(bill => {
      if (bill.total > this.maxValue) this.maxValue = bill.total;
    });
  }

onInputChange()
{
  console.log("HEY");
}
}
