import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import schoolResolver from './school.resolver';

describe('schoolResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => schoolResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
