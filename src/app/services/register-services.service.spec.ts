import { TestBed } from '@angular/core/testing';

import { RegisterServicesService } from './register-services.service';

describe('RegisterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterServicesService = TestBed.get(RegisterServicesService);
    expect(service).toBeTruthy();
  });
});
