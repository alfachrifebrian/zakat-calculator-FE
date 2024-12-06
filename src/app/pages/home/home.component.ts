import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FirstRunService } from '../../services/first-run.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderComponent, NavbarComponent],
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
