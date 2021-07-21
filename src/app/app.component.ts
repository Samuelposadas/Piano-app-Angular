import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano-app';

  soundApply(num: number): void {
    const audio = new Audio();
    audio.src = `../assets/Sounds/note${num}.wav`
    audio.load()
    audio.play()
  }
}
