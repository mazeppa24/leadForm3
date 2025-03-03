import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigInterface } from './app-config.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AppConfigService {
  private configSettings: AppConfigInterface = new AppConfigInterface();

  constructor(private http: HttpClient) {}

  // Config file location
  context = environment.baseUrl;
  configUrl = this.context + 'assets/config/app.config.json';

  get settings(): AppConfigInterface {
    return this.configSettings;
  }

  public load(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get<AppConfigInterface>(this.configUrl).subscribe((appConfigInterface: AppConfigInterface) => {
        this.configSettings = appConfigInterface;
        resolve(true);
      });
    }).catch((error) => console.log('Error getting app.config.json:', error));
  }
}
