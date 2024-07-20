const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProductOverView extends Page {

    get denyNotificationsButton(){
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]')
    }

    get createProductButton(){
        return $('//android.widget.Button[@text="Add device"]')
    }

    get pageHeader(){
        return $('//android.widget.TextView[@text="Product overview"]')
    }

    async denyNotification(){
        await this.denyNotificationsButton.waitForDisplayed({ timeout: 30000 });
        (await this.denyNotificationsButton).click()
    }

    async clickOnCreateNewProduct(){
        (await this.createProductButton).click()
    }

    async checkCreateNewProductButtonDisplaying(){
        (await expect(this.createProductButton).toBeDisplayed())
    }

    async verifyPageHeaderDisplaying(){
        await this.pageHeader.waitForDisplayed({ timeout: 30000 });
        await expect(this.pageHeader).toBeDisplayed();
    }

    async logoutFromApp(option){
        const logout = await $('//android.widget.Button[@text="'+option+'"]')
        await(logout.click());
    }

}

module.exports = new ProductOverView();