import "mocha";
describe("Website", function () {
  it("should be alive", function () {
    browser.url(`/`);
    const img = $(
      'img[src="http;//http://ip-5236.sunline.net.ua:38015/images/logotype.png"]'
    );
    browser.pause(1000);
    if (!img.isExisting()) {
      throw new Error("Website should be opened, and logo displayed");
    }
  });
});
