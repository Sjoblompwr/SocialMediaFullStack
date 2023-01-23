import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFeedComponent } from './status-feed.component';

describe('StatusFeedComponent', () => {
  let component: StatusFeedComponent;
  let fixture: ComponentFixture<StatusFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
