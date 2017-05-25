import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';
import { FixedPipe } from '../services/fixed.pipe';
import { AppComponent } from '../components/app.component';
import { CurrencySelectComponent } from '../components/currency-select.component';
import { ComboBoxSelectComponent } from '../components/imc.component';
import { IMCService } from '../services/imc.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CurrencySelectComponent, FixedPipe, ComboBoxSelectComponent],
  providers: [ExchangeService, IMCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
