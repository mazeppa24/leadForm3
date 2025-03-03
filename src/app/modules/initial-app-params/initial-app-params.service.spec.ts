import { TestBed } from "@angular/core/testing";

import { InitialAppParamsService } from "./initial-app-params.service";

describe("InitialAppParamsService", () => {
  let service: InitialAppParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialAppParamsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
