
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



## Create Android Virtual Device

1. Create Android Virtual Device using this link [Using this Link](https://developer.android.com/studio/run/managing-avds) 

2. Open Terminal or Command-line and go to emulator folder of Android:

### Windows

``` sh
cd C:\Users\<username>\AppData\Local\Android\Sdk\emulator
```

### Mac or Linux

``` sh
cd /Users/<username>/Library/Android/sdk/emulator
```

3. Run the following command to get all created avds

``` sh
./emulator -list-avds
```

4. Run the following to open avd:

``` sh
./emulator -avd <avd-device-name>
```

5. Drag and Drop the apk file on emulator after device loads up completely.

#### Note: Please Setup Google user or account before automating.


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

