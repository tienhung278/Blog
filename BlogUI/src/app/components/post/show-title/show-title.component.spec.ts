import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTitleComponent } from './show-title.component';

describe('ShowTitleComponent', () => {
  let component: ShowTitleComponent;
  let fixture: ComponentFixture<ShowTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
