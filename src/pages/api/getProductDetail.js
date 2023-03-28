import { load } from 'cheerio';
import { launch } from 'puppeteer';
import getChromeOptions from '../../lib/helpers/getChromeOptions';

// const exePath = "/usr/bin/google-chrome-stable" || "/usr/bin/google-chrome";

const getProductDetail = async (req, res) => {
  const { method, body } = req;
  console.log('IN@@@@@@@');

  if (method !== 'POST' || !body) {
    res.status(400);
    return res.end();
  }

  const { url } = body;

  const imagesSelector = '.fliobal .flinavigace .obrazekflithumb';
  const descriptionSelector = '.maincontent .popisdetail';
  const titleSelector = '.maincontent .listainzerat .nadpisdetail';

  try {
    const options = await getChromeOptions();
    const browser = await launch(options);
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    page.on('request', request => {
      if (request.resourceType() === 'document') {
        request.continue();
      } else {
        request.abort();
      }
    });
    console.log('before', url);
    await page
      .goto('https://auto.bazos.sk/inzerat/' + url, { timeout: 0 })
      .then(async response => {});
    const html = await page.evaluate(() => {
      return document.querySelector('body').innerHTML;
    });
    const $ = load(html);
    console.log('after url');
    const result = {
      images: [],
      description: []
    };

    $(imagesSelector).each((i, elem) => {
      result.images.push($(elem).attr('src'));
    });

    $(titleSelector).each((i, elem) => {
      result.title = $(elem).text();
    });

    $(descriptionSelector).each((i, elem) => {
      const element = [...$(elem).contents()]
        .filter(e => e.type === 'text' && $(e).text().trim())
        .map(e => $(e).text().trim());

      result.description = element;
    });

    await browser.close();
    res.status(200).json({ statusCode: 200, result });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default getProductDetail;

export const config = {
  api: {
    externalResolver: true
  }
};
