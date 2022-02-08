import { TestBed } from '@angular/core/testing';

import { ModalExcluirService } from './modal-excluir.service';

describe('ModalExcluirService', () => {
  let service: ModalExcluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalExcluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
