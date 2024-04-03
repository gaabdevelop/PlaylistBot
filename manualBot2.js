const { remote, Key } = require("webdriverio");
const readline = require("readline");

class WebdriverIO {
  constructor(palavra) {
    this.palavra = palavra;
  }

  async start() {
    global.browser = await remote({
      capabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          args: process.env.CI ? ["headless", "disable-gpu"] : [],
        },
      },
    });
  }

  async execute() {
    await this.start();
    await this.open();
    await this.end();
  }

  async open() {
    await browser.url("https://www.google.com/");

    const googleInput = await browser.$(".gLFyf");
    await googleInput.setValue("youtube");
    await browser.keys([Key.Enter]);

    const youtubeLink = await browser.$('a[href*="youtube.com"]');
    await youtubeLink.waitForDisplayed({ timeout: 5000 }); 
    await youtubeLink.click();

    const searchButton = await browser.$(".style-scope ytd-searchbox");
    await searchButton.waitForDisplayed({ timeout: 10000 });
    await searchButton.click();

    const youtubeInput = await browser.$(".gsfi.ytd-searchbox");
    await youtubeInput.setValue(this.palavra + " Playlist");
    await browser.keys([Key.Enter]);

    await browser.waitUntil(async () => {
      const playlists = await browser.$$("ytd-playlist-renderer");
      return playlists.length > 0;
  }, { timeout: 10000, timeoutMsg: 'No playlists found' });

  const playlists = await browser.$$("ytd-playlist-renderer");

  const playlistNames = [];

  for (const playlist of playlists) {
      const titleElement = await playlist.$(".yt-simple-endpoint .style-scope .ytd-playlist-renderer");
      const title = await titleElement.getText();
      playlistNames.push(title.trim());
  }

  console.log(playlistNames[0]);    

  }

  async end() {
    await browser.deleteSession();
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma palavra: ", async (palavra) => {
  const webdriverIO = new WebdriverIO(palavra);
  await webdriverIO.execute();
  rl.close();
});
