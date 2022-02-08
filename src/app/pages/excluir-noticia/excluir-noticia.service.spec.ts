import { TestBed } from '@angular/core/testing';

import { ModalExcluirService } from './excluir-noticia.service';

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
