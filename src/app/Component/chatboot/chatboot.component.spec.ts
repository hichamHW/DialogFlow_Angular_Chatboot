import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbootComponent } from './chatboot.component';

describe('ChatbootComponent', () => {
  let component: ChatbootComponent;
  let fixture: ComponentFixture<ChatbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
