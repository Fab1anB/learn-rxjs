import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerManagementPageComponent } from './player-management-page.component';

describe('PlayerManagementPageComponent', () => {
  let component: PlayerManagementPageComponent;
  let fixture: ComponentFixture<PlayerManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerManagementPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
