import { TestBed } from '@angular/core/testing';

import { EditarNoticiaService } from './editar-noticia.service';

describe('EditarNoticiaService', () => {
  let service: EditarNoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarNoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
