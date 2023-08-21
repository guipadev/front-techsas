import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionMultipleComponent } from './seleccion-multiple.component';

describe('SeleccionMultipleComponent', () => {
  let component: SeleccionMultipleComponent;
  let fixture: ComponentFixture<SeleccionMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionMultipleComponent]
    });
    fixture = TestBed.createComponent(SeleccionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
