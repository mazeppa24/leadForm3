import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LeadFormHostComponent } from "./lead-form-host.component";

describe("LeadFormHostComponent", () => {
  let component: LeadFormHostComponent;
  let fixture: ComponentFixture<LeadFormHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadFormHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadFormHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
