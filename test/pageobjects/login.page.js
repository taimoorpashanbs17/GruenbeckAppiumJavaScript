const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get emailAddressField(){
        return $('//android.view.View[@text="Sign in with your email address"]/android.widget.EditText[1]')
    }

    get passwordField(){
        return $('//android.view.View[@text="Sign in with your email address"]/android.widget.EditText[2]')
    }

    get signInButton(){
        return $('//android.widget.Button[@text="Sign in"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.emailAddressField.waitForExist({ timeout: 30000 });
        ;(await this.emailAddressField).addValue(username);
        ;(await this.passwordField).addValue(password);
        (await this.signInButton).click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new LoginPage();
