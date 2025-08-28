import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pessoal } from './pessoal';

describe('Pessoal', () => {
  let component: Pessoal;
  let fixture: ComponentFixture<Pessoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pessoal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pessoal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
