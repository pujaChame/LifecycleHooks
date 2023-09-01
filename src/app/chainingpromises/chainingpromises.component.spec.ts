import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingpromisesComponent } from './chainingpromises.component';

describe('ChainingpromisesComponent', () => {
  let component: ChainingpromisesComponent;
  let fixture: ComponentFixture<ChainingpromisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChainingpromisesComponent]
    });
    fixture = TestBed.createComponent(ChainingpromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
