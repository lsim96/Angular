import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  text = input<string>('');
  style = input<{ [key: string]: string }>({});
  btnClick = output();

  onBtnClick() {}
}
