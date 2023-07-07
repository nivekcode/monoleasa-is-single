import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "bar works"', () => {
    expect(component.title).toBe('bar works!');
  });
});
