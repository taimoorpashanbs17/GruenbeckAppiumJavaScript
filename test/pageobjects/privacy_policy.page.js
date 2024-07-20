const Page = require("./page");

class PrivacyPolicyPage extends Page{

    get pageHeader(){
        return $('//android.widget.TextView[@text="Privacy policy"]')
    }

    get backButton(){
        return $('//android.widget.Button[@text="Back"]')
    }

    async verifyPageHeaderDisplaying(){
        await expect(this.pageHeader).toBeDisplayed();
    }

    async navigateBack(){
        driver.back()
    }

}

module.exports = new PrivacyPolicyPage();