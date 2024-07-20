
# GruenbeckAppiumJavaScript

This project utilizes WebDriver.io to automate testing of a mobile application, right now just Android app only. WebDriver.io is a popular JavaScript-based testing framework that supports automation for web and mobile applications.

## Setup Instructions

### Prerequisites
1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
2. **Appium**: Appium is required for mobile automation. Install Appium by following the instructions on [appium.io](http://appium.io/).

### Project Setup
1. Clone this repository to your local machine:


```sh
git clone https://github.com/your/repository.git

cd GruenbeckAppiumJavaScript
```

2. Install dependencies using npm:

```sh
npm install
```


3. Ensure Appium server is running before executing tests.

## Running Tests

To run the tests, use the following command:

```sh
npm test
```

This command will execute the tests defined in the project using WebDriver.io and Appium.

## Project Structure

The project is structured as follows:

- **`wdio.conf.js`**: Configuration file for WebDriver.io, where browser and device capabilities are defined.
- **`test` directory**: Contains test scripts written in JavaScript using WebDriver.io API, and also contains `pageobjects` folder, which have all Pages and their objects.
- `Grunbeck.apk`: APK File, which needs to be automated.

## Additional Notes

- Make sure to customize the `wdio.conf.js` file according to your device capabilities and application details.
- Tests are located in the `test` directory and can be expanded based on your application's test scenarios.

## Contributing

Contributions are welcome! Fork this repository and submit a pull request with your changes.
