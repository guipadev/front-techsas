import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaConceptualComponent } from './mapa-conceptual.component';

describe('MapaConceptualComponent', () => {
  let component: MapaConceptualComponent;
  let fixture: ComponentFixture<MapaConceptualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaConceptualComponent]
    });
    fixture = TestBed.createComponent(MapaConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
