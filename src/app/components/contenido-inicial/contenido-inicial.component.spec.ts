import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInicialComponent } from './contenido-inicial.component';

describe('ContenidoInicialComponent', () => {
  let component: ContenidoInicialComponent;
  let fixture: ComponentFixture<ContenidoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
