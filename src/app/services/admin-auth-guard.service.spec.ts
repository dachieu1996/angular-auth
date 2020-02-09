/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminAuthGuardService } from './admin-auth-guard.service';

describe('Service: AdminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGuardService]
    });
  });

  it('should ...', inject([AdminAuthGuardService], (service: AdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
