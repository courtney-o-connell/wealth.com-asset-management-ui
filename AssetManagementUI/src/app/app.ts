import { Component, OnInit } from '@angular/core';
import { Asset } from './models/asset';
import { AssetManagementService } from './services/asset-management-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(private service: AssetManagementService) {}
  
  data: Asset[] = [];
  
  ngOnInit()
  {
    // Get the current date
    var date = new Date();

    // Get the current list of assets as of the given date
    this.service.getDataByDate(date.toDateString())
      .pipe().subscribe({
        next: (response) =>
          this.data = response.assets,
        error: (response) =>
          this.data = []
      })
  }
}
