import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaNotebook } from './cria-notebook.component';

describe('CriaNotebook', () => {
  let component: CriaNotebook;
  let fixture: ComponentFixture<CriaNotebook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaNotebook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaNotebook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
