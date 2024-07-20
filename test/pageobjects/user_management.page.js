const Page = require("./page");

class UserManagementPage extends Page{
    get pageHeader(){
        return $('//android.widget.TextView[@text="User management"]')
    }

    async userManagementMenuButton(name){
        return await $('//android.widget.Button[@text="'+name+'"]')
    }

    get backButton(){
        return $('//android.widget.Button[@text="Back"]')
    }

    async verifyPageHeaderDisplaying(){
        await expect(this.pageHeader).toBeDisplayed();
    }

    async checkButtonDisplaying(name){
        await (expect(this.userManagementMenuButton(name)).toBeDisplayed())
    }

    async navigateBack(){
        driver.back()
    }

}

module.exports = new UserManagementPage();