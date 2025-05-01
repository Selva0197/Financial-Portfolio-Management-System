import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { InvestmentStoreService } from '../../services/investment-store.service.ts.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule, MatSnackBarModule, CapitalizePipe
  ],
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent {
  investmentForm: FormGroup;
  submitted = false;
  reviewData: any = null;
  minDate: Date = new Date(); 
  loading = false;


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private store: InvestmentStoreService) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      purchasePrice: [null, [Validators.required, Validators.min(0.01)]],
      purchaseDate: [null, Validators.required],
    });
  }

  onReview(): void {
    if (this.investmentForm.valid) {
      this.loading = true;
        this.reviewData = this.investmentForm.value;
        this.submitted = true;
    } else {
      this.investmentForm.markAllAsTouched();
      this.snackBar.open('Kindly enter all the form fields', 'Close', {
        duration: 3000,
        panelClass: 'snack-error',
        verticalPosition: 'top'
      });
    }
  }

  onSubmit(): void {
    if (this.reviewData) {
      this.loading = true;
      const data = this.investmentForm.value;
      this.store.addInvestment(data);
        this.snackBar.open('Saved successfully', 'Close', {
          duration: 3000,
          panelClass: 'snack-success',
          verticalPosition: 'top'
        });
        this.investmentForm.reset();
        this.submitted = false;
        this.reviewData = null;
  
    }
  }
}
