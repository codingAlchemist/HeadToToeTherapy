import { sandboxOf } from 'angular-playground';
import { GiftCertificateComponent } from './gift-certificate.component';

export default sandboxOf(GiftCertificateComponent)
  .add('default', {
    template: `<app-gift-certificate></app-gift-certificate>`
  });
