import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DndItems } from '../../stores/items/model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StringListPipe } from '../../../custom-pipes/string-list.pipe';

@Component({
  selector: 'the-compendium-layout',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, StringListPipe],
  templateUrl: './the-compendium.component.html',
  styleUrl: './the-compendium.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheCompendiumComponent {
  @Input() dndItems: DndItems[] = [];
}
