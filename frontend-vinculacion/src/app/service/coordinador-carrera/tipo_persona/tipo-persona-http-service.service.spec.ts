import { TestBed } from '@angular/core/testing';

import { TipoPersonaHttpServiceService } from './tipo-persona-http-service.service';

describe('TipoPersonaHttpServiceService', () => {
  let service: TipoPersonaHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPersonaHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
