import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-paypal-integration',
  templateUrl: './paypal-integration.component.html',
  styleUrls: ['./paypal-integration.component.css']
})
export class PaypalIntegrationComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  addScript: boolean = false;

  finalAmount: number = 1;

  currency: string = 'USD';

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AdRbV0GaqBDNaFYhZagUX5gyZDQZy-zP8RIfn8PRgCIqsQMYyPKhD-OPjTDGpvmPZ5wovzQOtgOSsVdt'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: { total: this.finalAmount, currency: this.currency }
            }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log('Payment Successful');
        new Promise((resolve, rejects) => {
          let successElement = document.createElement('h2');
          successElement.textContent = "Payment Successful at: " + new Date() + '\n Amount: ' + this.finalAmount + ' ' + this.currency;
          successElement.onload = resolve;
          document.body.appendChild(successElement);
        })
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, rejects) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }

}
