import { TestBed } from '@angular/core/testing';
import { AgendaRoutingModule } from './agenda-routing.module';

describe('AgendaRoutingModule', () => {
  let pipe: AgendaRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AgendaRoutingModule] });
    pipe = TestBed.inject(AgendaRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
