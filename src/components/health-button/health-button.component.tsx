import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'health-button',
  styleUrl: 'health-button.styles.css',
  shadow: true
})
export class HealthButton {
  @Prop() title: string;

  private getText = (): string => format(this.title);

  render() {
    return <button>Hello, World! I'm {this.getText()}</button>;
  }
}
