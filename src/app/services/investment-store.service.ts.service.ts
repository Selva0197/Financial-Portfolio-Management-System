import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Investment {
  assetType: string;
  quantity: number;
  price: number;
  date: Date;
}

@Injectable({ providedIn: 'root' })
export class InvestmentStoreService {
  private investmentsSubject = new BehaviorSubject<Investment[]>([]);
  investments$ = this.investmentsSubject.asObservable();

  addInvestment(investment: Investment) {
    const current = this.investmentsSubject.value;
    this.investmentsSubject.next([...current, investment]);
  }
}
