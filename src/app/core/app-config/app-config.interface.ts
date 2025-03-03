
export class AppConfigInterface {
  stage: string;
  apiServerRoot: string;
  deployUrl: string;
  baseUrl: string;
  production: string;
  environment: string;
  client:string;

  constructor() {
    this.stage = '';
    this.apiServerRoot = '';
    this.deployUrl = '';
    this.baseUrl = '';
    this.production = '';
    this.environment = '';
    this.client='';
  }
}
