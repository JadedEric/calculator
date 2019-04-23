**# Calculator**

A simple calculator, build using Angular 7, SCSS for styling and a modular approach.


**# Build Status**

| Branch | Status  |

|--|--|

| Master | [![Build Status](https://dev.azure.com/digitalpeculiarity/Calculator/_apis/build/status/JadedEric.calculator?branchName=master)](https://dev.azure.com/digitalpeculiarity/Calculator/_build/latest?definitionId=1&branchName=master) |

| Development | [![Build Status](https://dev.azure.com/digitalpeculiarity/Calculator/_apis/build/status/JadedEric.calculator?branchName=development)](https://dev.azure.com/digitalpeculiarity/Calculator/_build/latest?definitionId=1&branchName=development) |



**# Getting Started**

To get started, simply fork the **master** repository and install the required node packages:

- npm i (install)

After the installation has been completed, build the application at least once to ensure that everything is in standing order. The build notification under the **Build Status** indicates the standing order of the last build, and should be positive, at least.

- npm run build

Once the build has been successful, launch the application by serving it out to the browser:

- npm run start



**# Unit Test and Code Coverage**

The application has been build with unit test and code coverage in mind. To see the test run, simply start the application using either of the following commands:

- npm run test

This command launches the standard testing run, launches the Chrome browser and outputs the jasmine results to screen.

- npm run e2e

This command runs a standard end-to-end test cycle against the project.

Note that none of these two commands will run a code coverage assessment on the application. To run the application against the code coverage test, run the following command:

- npm run headless

Headless has been implemented specifically for Azure DevOps pipeline builds, however, it makes the running of the application slightly less conducive.



**# Credits**

Credit goes to [Janko Sokolović](https://github.com/jasofalcon) for inspiration on this. His calculator application was exactly in line with the way I wanted to build it, and I drew a lot from his application into mine. Thanks.