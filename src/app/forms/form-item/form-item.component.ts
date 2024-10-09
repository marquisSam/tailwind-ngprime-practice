import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DndItem, DndItemCreateDTO, DndItemProperties, DndItemPropertiesOptions, DndItemRarity, DndItemRarityOptions, DndItemType, DndItemTypeOptions } from '../../stores/items/model';

import { MultiSelectModule } from 'primeng/multiselect';
import { dialogMode } from '../../dialogs/dialog-model';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
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
export class FormItemComponent  {
  constructor(private fb: FormBuilder) {
    this.form.valueChanges.pipe(
      debounceTime(300),
      takeUntilDestroyed(),
      distinctUntilChanged(),
      map(() => this.form.valid),
      tap(valid => this.formValid.emit(valid)),
    ).subscribe();
  }

  @Output() formValid = new EventEmitter<boolean>();
  @Output() submitForm = new EventEmitter<DndItemCreateDTO>();
  @Input() mode: dialogMode = dialogMode.View;
  @Input() set item(item: DndItem | undefined) {
    this._item = item;
    if (item) {
      this.#patchForm(item);
    }
  }

  get formValue(): DndItemCreateDTO {
    return this.form.getRawValue();
  }
  get item(): DndItem | undefined {
    return this._item;
  }

  form = this.fb.group<FormItem>({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    description: new FormControl(null),
    value: new FormControl(null),
    weight: new FormControl(null),
    rarity: new FormControl(null),
    type: new FormControl(null),
    properties: new FormControl(null),
  });

  _item: DndItem | undefined = undefined;
  dialogMode = dialogMode;
  rarities = DndItemRarityOptions;
  types = DndItemTypeOptions;
  properties = DndItemPropertiesOptions;

  onSubmit() {
    if (!this.formValid) return
    this.submitForm.emit(this.formValue);
  }

  #patchForm({name, description, value, weight, rarity, type, properties}: DndItem) {
    this.form.patchValue({
      name,
      description,
      value,
      weight,
      rarity,
      type,
      properties,
    });
  }
 }
