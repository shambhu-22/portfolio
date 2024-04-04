import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './Services/theme.service';
import { Option } from 'src/Models/option.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  
}
