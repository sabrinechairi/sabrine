import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilierComponent } from './filier.component';

describe('FilierComponent', () => {
  let component: FilierComponent;
  let fixture: ComponentFixture<FilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
