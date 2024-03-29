import './css/style.css';
import typescriptLogo from './typescript.svg';
import BackGround from './BackGround';
import Slide from './Slide';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id='wrapper'>
    <div id='slide' class="card">
    </div>
    <div type='button' id='slideBtn'></div>
    <div class="vite_with_ts">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
  </div>
`;

BackGround(document.querySelector<HTMLDivElement>('#wrapper')!);
Slide(
  document.querySelector<HTMLDivElement>('#slide')!,
  document.querySelector<HTMLDivElement>('#slideBtn')!,
);

/** 미작업 목록
 * * SubViewer
 * * slide animation
 * * Greeting
 * * CSS
 */
