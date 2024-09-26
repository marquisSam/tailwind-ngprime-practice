import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BagsCreateDTO } from '../../stores/bags/model';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-form-bag',
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
  ],
  templateUrl: './form-bag.component.html',
  styleUrl: './form-bag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBagComponent {
  constructor(private fb: FormBuilder) {}
  form = this.fb.group<BagsCreateDTO>({
    name: '',
    description: '',
    capacity: 0,
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
