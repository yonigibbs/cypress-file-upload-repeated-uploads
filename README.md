# Overview
This repository provides an example to reproduce this issue: https://github.com/abramenal/cypress-file-upload/issues/TODO

Namely, version 5.0.0 of [cypress-file-upload](https://github.com/abramenal/cypress-file-upload) causes an issue: if the
test simulates a user uploading one file then another (to replace the first one), on the second upload the system thinks
that two files are being uploaded at once, rather than just one.

This repository uses Elm code (transpiled into JavaScript), which might or might not be related to the problem.

There is a separate branch,
[cypress-file-upload-4.1.1](https://github.com/yonigibbs/cypress-file-upload-repeated-uploads/tree/cypress-file-upload-4.1.1),
which downgrades from v5.0.0 to v4.1.1 of cypress-file-upload, and which _does_ work.

# Instructions
## Starting the app
Run the following to start the app:

    npm run serve

This will launch [Parcel](https://parceljs.org/), which will transpile the Elm code into JavaScript, then launch a dev
web server to serve up the page at http://localhost:1234.

## Manual execution
When the page is loaded, simply upload one file and notice that its name is shown. Now upload a second one and notice
that _only_ its name is shown: this is correct, i.e. it has _replaced_ the original file, not added to it.

There are sample JPGs you can use here: [cypress/fixtures/](cypress/fixtures/).

## Cypress execution
To launch Cypress run the following:

    npm run cypress:open

From there you can run the single test in this project, and notice that it fails. The reason is that the code shows that
_two_ files have been uploaded on the second upload, but actually only one was.
