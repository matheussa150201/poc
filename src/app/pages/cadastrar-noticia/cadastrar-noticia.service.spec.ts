/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastrarNoticiaService } from './cadastrar-noticia.service';

describe('Service: CadastrarNoticia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastrarNoticiaService]
    });
  });

  it('should ...', inject([CadastrarNoticiaService], (service: CadastrarNoticiaService) => {
    expect(service).toBeTruthy();
  }));
});
