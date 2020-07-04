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

  addScript: boolean = false; // Denota si ya se cargó el script de PayPal

  finalAmount: number = 1; // Monto a cobrar, se puede alterar

  currency: string = 'USD'; // Moneda en la que se va a pagar

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AdRbV0GaqBDNaFYhZagUX5gyZDQZy-zP8RIfn8PRgCIqsQMYyPKhD-OPjTDGpvmPZ5wovzQOtgOSsVdt' // 'Client ID' de la aplicación
    },
    commit: true,
    payment: (data, actions) => { // se define el pago a realizar
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
    onAuthorize: (data, actions) => { // Corre luego de que hay una autorización exitosa
      return actions.payment.execute().then((payment) => {
        console.log('Payment Successful');
        new Promise((resolve, rejects) => {
          let successElement = document.createElement('h2');
          // Crea un elemento de HTML para notificar que el pago fue exitoso.
          successElement.textContent = "Payment Successful at: " + new Date() + '\n Amount: ' + this.finalAmount + ' ' + this.currency;
          successElement.onload = resolve;
          document.body.appendChild(successElement);
        })
      })
    }
  };

  ngAfterViewChecked(): void { // Crea el botón de pago de PayPal al visitar la página.
    if (!this.addScript) {
      this.addPaypalScript().then(() => { // se crea el botón luego de cargar el script de paypal
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }

  addPaypalScript() { // Llama el script de pagos de paypal
    this.addScript = true;
    return new Promise((resolve, rejects) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }

}
