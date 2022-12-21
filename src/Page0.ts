import Clock from './Clock';
import Quote from './Quotes';

export default function Page0(element: HTMLDivElement):void {
  const ele = element;
  const clock = document.createElement('div');
  const quote = document.createElement('div');

  ele.appendChild(clock);
  ele.appendChild(quote);

  Clock(clock);
  Quote(quote);
}