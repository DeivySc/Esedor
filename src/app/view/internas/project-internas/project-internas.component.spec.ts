import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInternasComponent } from './project-internas.component';

describe('ProjectInternasComponent', () => {
  let component: ProjectInternasComponent;
  let fixture: ComponentFixture<ProjectInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInternasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
