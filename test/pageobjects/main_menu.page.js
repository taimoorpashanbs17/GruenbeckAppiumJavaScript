const Page = require("./page");

class MainMenuPage extends Page{

    get mainMenuButton(){
        return $('//android.widget.Button[@text="Main menu"]')
    }

    async clickOnMainMenuButton(){
        await this.mainMenuButton.waitForDisplayed({ timeout: 30000 });
        (await this.mainMenuButton).click();
    }

    async menuOption(name){
        return await $('(//android.widget.TextView[@text="'+name+'"])')
    }

    async checkMenuDisplaying(name){
        await expect(this.menuOption(name)).toBeDisplayed();
    }

    async openMenuOption(name){
        (await this.menuOption(name)).click();
    }

}

module.exports = new MainMenuPage();