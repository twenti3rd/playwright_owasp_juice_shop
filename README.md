# Testing OWASP Juice Shop with Playwright in JavaScript
This is a Playwright script that tests 3 scenarios using JavaScript.

## Scenario 1
Login with your user, add 1 item to the basket, click on checkout, add a new address, fill in the
address form, click on submit.

## Scenario 2
Exact same flow, but this time, add 2 items to your basket, click on checkout, add a new address,
fill in the address form, click on submit

To run the first 2 scenarios, use the command below;

```
npx playwright test checkout.spec.js
```

## Scenario 3
Click on the search button, search for apple, verify that 2 apple products show up and that
banana product does not show up

```
npx playwright test search.spec.js
```

_In case that need to run only on Chromium, use command_ `--project=chromium`

_In case that need to see when running tests, use command_ `--headed`
