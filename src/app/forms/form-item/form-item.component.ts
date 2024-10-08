import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { DndItemCreateDTO, DndItemProperties, DndItemPropertiesOptions, DndItemRarity, DndItemRarityOptions, DndItemType, DndItemTypeOptions } from '../../stores/items/model';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

import { MultiSelectModule } from 'primeng/multiselect';
interface FormItem {
  name: FormControl<string>;
  description: FormControl<string | null>;
  value: FormControl<number | null>;
  weight: FormControl<number | null>;
  rarity: FormControl<DndItemRarity | null>;
  type: FormControl<DndItemType | null>;
  properties: FormControl<DndItemProperties[] | null>;
}

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    ButtonModule,
    DividerModule,
    InputTextareaModule,
    DropdownModule,
    MultiSelectModule
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemComponent {
  @Output() submitForm = new EventEmitter<DndItemCreateDTO>();
  constructor(private fb: FormBuilder) { }


  rarities = DndItemRarityOptions;
  types = DndItemTypeOptions;
  properties = DndItemPropertiesOptions;

  form = this.fb.group<FormItem>({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    description: new FormControl(null),
    value: new FormControl(null),
    weight: new FormControl(null),
    rarity: new FormControl(null),
    type: new FormControl(null),
    properties: new FormControl(null),
  });

  get formValue(): DndItemCreateDTO {
    return this.form.getRawValue();
  }
  get formValid() {
    return this.form.valid;
  }

  onSubmit() {
    if (!this.formValid) return
    console.log(this.formValue);
  }
 }
