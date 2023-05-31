import { TestBed } from '@angular/core/testing';
import { AgendaModule } from './agenda.module';

describe('AgendaModule', () => {
  let pipe: AgendaModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AgendaModule] });
    pipe = TestBed.inject(AgendaModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
