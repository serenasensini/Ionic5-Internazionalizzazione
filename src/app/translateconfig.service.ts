import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization/ngx';

@Injectable({
  providedIn: 'root'
})
export class TranslateconfigService {

  constructor(public globalization: Globalization, private translate: TranslateService) {
    this.getDeviceLanguage();
  }

  getDeviceLanguage() {
    this.globalization.getPreferredLanguage().then(res => {
      console.log(res);
      if (res) {
        this.setLanguage(res);
      } else {
        this.setLanguage(this.getDefaultLanguage());
      }
    })
        .catch(e => console.log(e));
  }

  getDefaultLanguage() {
    const lang = this.translate.getBrowserLang();
    this.translate.setDefaultLang(lang);
    return lang;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }
}
