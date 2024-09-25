import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BagDialogueComponent } from '../../dialogs/bagDialogue/bagDialogue.component';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerComponent {
  constructor(private dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  openBagDialog() {
    this.ref = this.dialogService.open(BagDialogueComponent, {
      header: 'Add Bag',
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
}
