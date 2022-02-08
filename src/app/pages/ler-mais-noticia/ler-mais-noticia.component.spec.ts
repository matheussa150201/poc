/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LerMaisComponent } from './ler-mais-noticia.component';

describe('LerMaisComponent', () => {
  let component: LerMaisComponent;
  let fixture: ComponentFixture<LerMaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerMaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
