import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmpresaCardComponent } from './custom-empresa-card.component';

describe('CustomEmpresaCardComponent', () => {
  let component: CustomEmpresaCardComponent;
  let fixture: ComponentFixture<CustomEmpresaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomEmpresaCardComponent]
    });
    fixture = TestBed.createComponent(CustomEmpresaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
