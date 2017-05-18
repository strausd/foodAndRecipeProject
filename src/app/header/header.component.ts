import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() showRecipes = new EventEmitter<string>();

  onSelect(feature: string) {
    this.showRecipes.emit(feature);
  }
}
