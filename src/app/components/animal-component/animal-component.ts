import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  imports: [],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: FormGroup | any;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}
  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }
  newMessage(messageText: string) {
    this.toastr
      .success('Clic aquí para actualizar la lista', messageText)
      .onTap.pipe(take(1))
      .subscribe(() => window.location.reload());
  }
}
