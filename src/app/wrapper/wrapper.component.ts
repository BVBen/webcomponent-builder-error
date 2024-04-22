import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  InterviewForArt,
  TaxCase,
  TaxInfoArt,
} from '@datev/tax-integration/sdk';
import '@datev/tax-integration';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
})
export class WrapperComponent {

  constructor() { }

  taxcase: TaxCase = {
    meta: {
      version_der_taxonomie: '5.5',
      veranlagungszeitraum: '2023',
      taxonomie: 'est',
    },
    taxfacts: {
      personenangaben: [
        {
          taxfactid: '0bf82911-de22-15d8-8a75-3cc9088c074d',
          taxfact_type: 'personenangaben',
        },
      ],
    },
  };

  interviewConfig: InterviewForArt = {
    type: 'InterviewForArt',
    art: TaxInfoArt.AUSGABE,
    taxCase: this.taxcase,
  };

}
