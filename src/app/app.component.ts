import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchPageComponent from "./gifs/pages/search-page/search-page.component";
import DashboardPageComponent from "./gifs/pages/dashboard-page/dashboard-page.component";
import TrendingPageComponent from "./gifs/pages/trending-page/trending-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
