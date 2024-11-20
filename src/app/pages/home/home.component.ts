import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FirstRunService } from '../../services/first-run.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private firstRunService: FirstRunService) {}

  protected name: WritableSignal<String> = signal('');

  ngOnInit(): void {
    this.firstRunService.checkFirstRun().subscribe((result) => {
      console.log(result);
    });
  }
}
