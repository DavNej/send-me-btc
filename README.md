# Send me BTC

## Objective

Build a simple NextJS application that allows users to generate a testnet Bitcoin
payment request, display a QR code for the payment, and check the payment status.

## Requirements

* [x] Generate a new HD wallet (No persistence)
* [x] Display a form to specify the BTC amount for the payment request
* [x] Upon form submission, display a QR code for the payment request using the address from the generated HD wallet and the amount provided by the user
* [x] Poll until payment is received, and display appropriate message to the user
* [x] Example: you might want to poll for a payment which has been received after the time when payment request was created.

## Instructions

Application is deployed and available at https://send-me-btc.vercel.app/

Run the app with:

```
pnpm dev
```

Generate a production build with:

```
pnpm build
```
