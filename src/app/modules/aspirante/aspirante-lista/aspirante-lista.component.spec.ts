import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspiranteListaComponent } from './aspirante-lista.component';

describe('AspiranteListaComponent', () => {
  let component: AspiranteListaComponent;
  let fixture: ComponentFixture<AspiranteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AspiranteListaComponent]
    });
    fixture = TestBed.createComponent(AspiranteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
