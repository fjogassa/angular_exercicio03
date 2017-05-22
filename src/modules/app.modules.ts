import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';
import { FixedPipe } from '../services/fixed.pipe';
import { AppComponent } from '../components/app.component';
import { CurrencySelectComponent } from '../components/currency-select.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CurrencySelectComponent, FixedPipe],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
