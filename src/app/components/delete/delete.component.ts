import { Component, OnInit, Input } from '@angular/core';
import { LanguagesService } from 'src/app/languages.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() id?: number;
  constructor(private service: LanguagesService) { }

  ngOnInit(): void {
  }

  deleteThisCreator(): void{
    this.service.deleteCreator(Number(this.id));
  }

}
