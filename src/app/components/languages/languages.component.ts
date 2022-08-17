import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { languageCreator } from 'src/app/languageCreator';
import { LanguagesService } from 'src/app/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  listOfLanguages: languageCreator[] = [];
  creatorForm = this.fb.group({
    languageName: ['', Validators.required],
    creatorName: ['', Validators.required],
    Nationality: ['',Validators.required]
  })
  formHolder?: languageCreator;


  constructor(
    private service: LanguagesService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getAllLanguages();
  }

  getAllLanguages(): void{
    this.service.getLanguageCreators().subscribe(data => this.listOfLanguages = data);
  }

  saveData(): void{
    if(this.listOfLanguages.length <= 4){
      if(this.creatorForm.status == "VALID"){
        this.formHolder = {
          languageName:String( this.creatorForm.value.languageName),
          Nationality: String(this.creatorForm.value.Nationality),
          creatorName: String(this.creatorForm.value.creatorName)
        }
        this.service.createLanguageCreator(this.formHolder);
      }else {
        alert("please make sure your form is correct!")
      }
    }
  }

  deleteMe(): void{
    alert("delete this one");
  }

}