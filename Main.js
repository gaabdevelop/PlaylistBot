const { remote, Key } = require('webdriverio');

class WebdriverIO {
    async start() {
        global.browser = await remote({
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: process.env.CI ? ['headless', 'disable-gpu'] : []
                }
            }
        });
    }

    async execute() {
        await this.start();
        await this.open();
        await this.end();
    }
    
    async open() {
        const LinkDaPlaylist ='https://www.youtube.com/playlist?list=PL9V30Zw8pThpOwPqtj36T1EdCGvNXiRKu';
        await browser.url(LinkDaPlaylist)
        const videoTitleElements = await browser.$$('.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer');
        const links = [];
        for (const element of videoTitleElements) {
            const href = await element.getAttribute('href');
            links.push(`https://www.youtube.com${href}`);
        }
        console.log(links)
        for (const link of links) {
            await this.downloadFromYouTube(link);
        }
    }

    async downloadFromYouTube(link) {
        await browser.url('https://pt.ytmp3.mobi/');
        const input = await browser.$('#input');
        await input.setValue(link);
        await browser.keys([Key.Enter]);
        await browser.$('#download > #file').waitForDisplayed({ timeout: 2000000 });
        const downloadButton = await browser.$('#download > #file');
        await downloadButton.click();
    }
    
    async end() {
        await browser.deleteSession();
    }
}

module.exports = WebdriverIO;
