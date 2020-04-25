import { Component } from '@angular/core';
import {TranslateconfigService} from '../translateconfig.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  params = {
    value: 'John Doe'
  };
  selectedLanguage: any;

  constructor(public translateconfigService: TranslateconfigService) {
    const lang = this.translateconfigService.getDeviceLanguage();
    this.translateconfigService.setLanguage(lang);
  }

  changeLang() {
    this.translateconfigService.setLanguage(this.selectedLanguage);
  }

}
