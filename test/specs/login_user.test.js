const LoginPage = require('../pageobjects/login.page')
const ProductOverView = require('../pageobjects/product_overview.page')
const MainMenuPage = require('../pageobjects/main_menu.page');
const UserManagementPage = require('../pageobjects/user_management.page');
const PrivacyPolicyPage = require('../pageobjects/privacy_policy.page')

describe('Intial Testing', () => {
    beforeEach(async () => {
        await LoginPage.login("taimoorpasha2009@gmail.com", "Test@12345");
        await ProductOverView.denyNotification();
    })
    it('Login User and check "New Product" Button is displaying', async () => {
        await ProductOverView.checkCreateNewProductButtonDisplaying();
    })


    it('Check all Menu Options are displaying', async () => {
        await MainMenuPage.clickOnMainMenuButton();
        await MainMenuPage.checkMenuDisplaying("Product overview");
        await MainMenuPage.checkMenuDisplaying("Help and Info");
        await MainMenuPage.checkMenuDisplaying("Privacy policy");
        await MainMenuPage.checkMenuDisplaying("User management");
        await MainMenuPage.checkMenuDisplaying("Logout");

    })

    it('Navigate to "User Management", verify properties and navigate back', async () => {
        await MainMenuPage.clickOnMainMenuButton();
        await MainMenuPage.openMenuOption("User management");
        await UserManagementPage.verifyPageHeaderDisplaying();
        await UserManagementPage.checkButtonDisplaying("Change password");
        await UserManagementPage.checkButtonDisplaying("Change email address");
        await UserManagementPage.checkButtonDisplaying("Delete user account");
        await UserManagementPage.navigateBack();
        await ProductOverView.verifyPageHeaderDisplaying();
    })

    it('Navigate to "Privacy Policy", and navigate back', async () => {
        await MainMenuPage.clickOnMainMenuButton();
        await MainMenuPage.openMenuOption("Privacy policy");
        await PrivacyPolicyPage.verifyPageHeaderDisplaying();
        await PrivacyPolicyPage.navigateBack();
        await ProductOverView.verifyPageHeaderDisplaying();
    })

    it('Logout From App', async () => {
        await MainMenuPage.clickOnMainMenuButton();
        await MainMenuPage.openMenuOption("Logout");
        await ProductOverView.logoutFromApp("Yes")
    })

    afterEach(async () => {
        await driver.pause(3000);
        await driver.reloadSession();
    })
})

