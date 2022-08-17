import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { languageCreator } from 'src/app/languageCreator';
import { LanguagesService } from 'src/app/languages.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  Creator?: languageCreator;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: LanguagesService
  ) { }

  ngOnInit(): void {
    this.getCreator();
  }

  getCreator(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getSingleCreator(id).subscribe(data => this.Creator = data);
  }

}
