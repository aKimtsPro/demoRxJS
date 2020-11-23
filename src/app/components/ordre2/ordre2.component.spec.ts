/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ordre2Component } from './ordre2.component';

describe('Ordre2Component', () => {
  let component: Ordre2Component;
  let fixture: ComponentFixture<Ordre2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ordre2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ordre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
