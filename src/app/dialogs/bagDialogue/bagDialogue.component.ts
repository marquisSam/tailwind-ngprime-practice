import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bag-dialogue',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './bagDialogue.component.html',
  styleUrl: './bagDialogue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagDialogueComponent { }
