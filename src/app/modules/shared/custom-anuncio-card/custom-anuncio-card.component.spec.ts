import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnuncioCardComponent } from './custom-anuncio-card.component';

describe('CustomAnuncioCardComponent', () => {
  let component: CustomAnuncioCardComponent;
  let fixture: ComponentFixture<CustomAnuncioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAnuncioCardComponent]
    });
    fixture = TestBed.createComponent(CustomAnuncioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
