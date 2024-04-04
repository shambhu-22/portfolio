import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/Models/option.model';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
@Input() options: Option[] = [];
@Output() themeChange: EventEmitter<string> = new EventEmitter<string>();
 
  constructor(private themeService: ThemeService) {}
 
  changeTheme(themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }
}
