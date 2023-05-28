# A test suite for the examples on http://the-internet.herokuapp.com/

## Running the tests

`npx playwright test` - To run all tests, on all browsers, in parallel.

The following options are also helpful:

`--reporter` - Specify the test reporter, e.g. list, allure, playwright-html

`--project` - The browser, e.g. chrome, safari, edge or firefox. Projects can also be set up for certain viewports e.g. chrome-tablet

`--headed` - Whether to run in headed mode and view the browser performing actions

`--ui`- Whether to open the tests in the cypress-like UI mode (also allows you to replay the tests + view network traffic)

`--workers` - The number of workers being used to run the tests

## Debugging

Adding `await page.pause()` will pause execution when the browser is launched in headed mode and the debugger UI will be made available.

For running specific tests, you can add `test.only`, in which case you do not need to specify the exact location of the test (e.g. specs/checkboxes.spec.ts:23)
