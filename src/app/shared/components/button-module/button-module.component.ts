import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-module',
  templateUrl: './button-module.component.html',
  styleUrls: ['./button-module.component.scss']
})
export class ButtonModuleComponent {
  @Input() moduleName: string | undefined;
  @Input() moduleIcon: string | undefined;
  @Input() moduleUrl: string | undefined;
}
