import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/Services/theme.service';
import { Option } from 'src/Models/option.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  constructor(private themeService: ThemeService) { 
  }
options: Option[] = [];
  ngOnInit() {
    // this.themeService.setTheme("indigo-pink"); // TODO
    // this.options$.subscribe((data) => {
    //   this.options = data;
    // })
  }
 
  themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }
}
