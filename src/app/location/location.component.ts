import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();

  locations: { name: string }[] = [
    { name: 'Chennai' },
    { name: 'Coimbatore' },
    { name: 'Salem' }
  ];

  selectLocation(location: { name: string }): void {
    this.locationSelected.emit(location.name);
    sessionStorage.setItem("Location",location.name);
  }
}
