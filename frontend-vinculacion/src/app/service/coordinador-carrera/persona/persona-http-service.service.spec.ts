import { TestBed } from '@angular/core/testing';

import { PersonaHttpServiceService } from './persona-http-service.service';

describe('PersonaHttpServiceService', () => {
  let service: PersonaHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
