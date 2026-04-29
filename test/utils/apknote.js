export async function click(selector) {
    const ac = await $(selector);
    await ac.waitForDisplayed();
    await ac.click();
}

export async function setValue(selector, value) {
    const ac = await $(selector);
    await ac.waitForDisplayed();
    await ac.setValue(value);
}

export async function expectText(selector, expectedText) {
    const ac = await $(selector);
    await ac.waitForDisplayed();
    await expect(ac).toHaveText(expectedText);
}

export async function expectDisplayed(selector) {
    const ac = await $(selector);
    await ac.waitForDisplayed();
    await expect(ac).toBeDisplayed();
}
export async function expectNotDisplayed(selector) {
    const ac = await $(selector);
    await expect(ac).not.toBeDisplayed();
}
export async function expecttextnotdisplayed(selector, expectedText) {
    const ac = await $(selector);
    await ac.waitForDisplayed();
    await expect(ac).not.toHaveText(expectedText);
}