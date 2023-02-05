import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProflieComponent } from './edit-proflie.component';

describe('EditProflieComponent', () => {
  let component: EditProflieComponent;
  let fixture: ComponentFixture<EditProflieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProflieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProflieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
