import { TestBed } from '@angular/core/testing';

import { ChatbootService } from './chatboot.service';

describe('ChatbootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatbootService = TestBed.get(ChatbootService);
    expect(service).toBeTruthy();
  });
});
