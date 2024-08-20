import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AziAltComponent } from './azi-alt.component';

describe('AziAltComponent', () => {
  let component: AziAltComponent;
  let fixture: ComponentFixture<AziAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AziAltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AziAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
