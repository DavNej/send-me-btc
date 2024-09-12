# Send me BTC

Version deployed at: https://send-me-btc.vercel.app/

## Objective

Build a simple NextJS application that allows users to generate a testnet Bitcoin
payment request, display a QR code for the payment, and check the payment status.

## Requirements

1. Generate a new HD wallet (No persistence)
2. Display a form to specify the BTC amount for the payment request
3. Upon form submission, display a QR code for the payment request using the address from the generated HD wallet and the amount provided by the user
4. Poll until payment is received, and display appropriate message to the user
5. Example: you might want to poll for a payment which has been received after the time when payment request was created.

## Evaluation criteria

- Does the application work as expected? Are all loading/error cases and other edge cases handled correctly?
- Is the code clean, modular and extensible?
- Is the UI clear and easy to use (implements responsive design where applicable)?

## Submission instructions

- Solution should be production-ready
- Should include a README file with instructions and any details/improvements you would add.
- Send the GitHub repository link with the solution.
