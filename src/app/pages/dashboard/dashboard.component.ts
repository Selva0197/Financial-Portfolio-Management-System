import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions
} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // 1. Bar Chart
  assetAllocationData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350']
    }]
  };

  portfolioLineChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Portfolio Value',
      data: [10000, 12000, 11500, 13000, 13500, 15000],
      borderColor: '#42A5F5',
      fill: false
    }]
  };

  marketTrendsRadar = {
    labels: ['Tech', 'Health', 'Energy', 'Finance', 'Utilities'],
    datasets: [{
      label: 'Market Trends',
      data: [85, 70, 60, 75, 50],
      backgroundColor: 'rgba(66,165,245,0.3)',
      borderColor: '#42A5F5'
    }]
  };

  benchmarkBarData = {
    labels: ['Portfolio', 'S&P 500', 'Nasdaq', 'Dow Jones'],
    datasets: [{
      label: 'Growth %',
      data: [15, 12, 10, 8],
      backgroundColor: ['#66BB6A', '#42A5F5', '#FFA726', '#EF5350']
    }]
  };

  bubbleChartData = {
    datasets: [{
      label: 'Asset Risk/Return',
      data: [
        { x: 6, y: 15, r: 10 },
        { x: 8, y: 12, r: 8 },
        { x: 10, y: 20, r: 12 }
      ],
      backgroundColor: '#FF6384'
    }]
  };

  progressChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Progress %',
      data: [20, 40, 60, 80],
      backgroundColor: '#42A5F5'
    }]
  };

  lineOptions: ChartConfiguration['options'] = {
    responsive: true,
    animations: {
      tension: {
        duration: 2000,
        easing: 'easeInOutQuad',
        from: 1,
        to: 0,
        loop: true
      }
    }
  };

  barOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y'
  };

  progressChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutBounce'
    }
  };
}