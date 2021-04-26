import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmovieComponent } from './listmovie.component';

describe('ListmovieComponent', () => {
  let component: ListmovieComponent;
  let fixture: ComponentFixture<ListmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
