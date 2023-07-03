import { Component, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-popupmessage',
  templateUrl: './popupmessage.component.html',
  styleUrls: ['./popupmessage.component.css']
})
export class PopupmessageComponent {
constructor(private dataservice:DataserviceService){}
  @Input()
  message!: string;
}
