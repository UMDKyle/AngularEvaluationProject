import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  search = output<string>();

  onKeyDown(event: KeyboardEvent, input: HTMLInputElement): void {
    if (event.key === 'Enter' && input.value.trim()) {
      this.search.emit(input.value.trim());
    }
  }

  onSubmit(event: Event, input: HTMLInputElement): void {
    event.preventDefault();
    if (input.value.trim()) {
      this.search.emit(input.value.trim());
    }
  }
}
