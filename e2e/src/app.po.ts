import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination) {
    return browser.get(destination);
  }

  getParagraphText() {
    return element(by.deepCss('tg-root ion-content')).getText();
  }
}
