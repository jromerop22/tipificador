import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.scss'],
})
export class PlantaComponent {
  constructor(private fb: FormBuilder) {}
  plantaForm = new FormGroup({
    tipoServicio: new FormControl(''),
  });

  onSubmit() {
    console.log('pepito', this.plantaForm.value);
  }
  onReset() {
    this.plantaForm.reset();
  }
}
