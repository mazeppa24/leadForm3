import { TestBed } from '@angular/core/testing';

import { ComponentLocalTranslateService } from './component-local-translate.service';

describe('ComponentLocalTranslateService', () => {
  let service: ComponentLocalTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLocalTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
