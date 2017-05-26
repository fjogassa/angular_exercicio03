import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMCService } from '../services/imc.service';

@Component({    
    selector: 'imc-combobox',
    template: `
    <select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
      <option *ngFor="let sexo of valorSexoService" [value]="sexo">
        {{sexo}}
      </option>
    </select>
  `
})
export class ComboBoxSelectComponent {

  @Input() selected: string;
  @Output() selectedChange = new EventEmitter<string>();

  valorSexoService: string[];

  constructor(imcService: IMCService) {
    this.valorSexoService = imcService.valorSexoService;
  }

  onSelectedChange(selected: string) {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }    
}