import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addressGuard } from './address.guard';

describe('addressGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addressGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
