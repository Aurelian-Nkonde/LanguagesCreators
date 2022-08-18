import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { languageCreator } from './languageCreator';
import { LANGUAGECREATORS } from './mock-languageCreator';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  id: number = 1;
  allCreators: languageCreator[] = []; 

  constructor() {
    this.updateData();
   }

   updateData():void {
    this.allCreators = LANGUAGECREATORS;
   }

  getLanguageCreators(): Observable<languageCreator[]> {
    let data = of(this.allCreators)
    return data;
  }

  getSingleCreator(id: number): Observable<languageCreator> {
    const single = LANGUAGECREATORS.find(a => a.id == id)!;
    return of(single);
  }

  createLanguageCreator(data: languageCreator): void{
    data.id = this.id++;
    this.allCreators.push(data);
  }

  deleteCreator(id: number): void{
    let data = this.allCreators.filter((a) => a.id == id)[0];
    let index = this.allCreators.indexOf(data);
    console.log(index);
    this.allCreators.splice(index,1);
  }
}
