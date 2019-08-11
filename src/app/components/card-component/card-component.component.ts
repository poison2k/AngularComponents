import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})



export class CardComponentComponent implements OnInit {

  public meineCards: Array<Card>;
  public rowCradList: Array<Array<Card>>;

  constructor() {
    this.rowCradList = new Array<Array<Card>>(
      new Array<Card>(
        {
          Titel: 'Mein kleiner Test 1',
          Beschreibung: 'Ein einfaches kelines Design für Cards mal gucken wie es aussieht',
          ImgPath: 'assets/images/cover.jpg',
          Link: '#'
        },
        {
          Titel: 'Test Nr 2',
          Beschreibung: 'Noch ein kleiner Test damit man mal zwei Karten hat',
          ImgPath: 'assets/images/cover.jpg',
          Link: '#'
        },
        {
          Titel: 'Test Nr 3',
          Beschreibung: 'Noch ein kleiner Test damit man mal zwei Karten hat',
          ImgPath: 'assets/images/cover.jpg',
          Link: '#'
        }
      ),
      new Array<Card>(
        {
          Titel: 'Test Nr 4',
          Beschreibung: 'Noch ein kleiner Test damit man mal zwei Karten hat',
          ImgPath: 'assets/images/cover.jpg',
          Link: '#',
        }
      )
    );
  }
  ngOnInit() {}
}