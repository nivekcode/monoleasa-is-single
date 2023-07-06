import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BazComponent } from './baz.component';

describe('BazComponent', () => {
  let component: BazComponent;
  let fixture: ComponentFixture<BazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
