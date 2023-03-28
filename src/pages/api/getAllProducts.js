import { load } from 'cheerio';
import { launch } from 'puppeteer';
import getChromeOptions from '../../lib/helpers/getChromeOptions';

const getAllProducts = async (req, res) => {
  const titleSelector = '.inzeraty .inzeratynadpis .nadpis';
  const priceSelector = '.inzeraty .inzeratycena b';
  const imgSelector = '.inzeraty .inzeratynadpis a img';
  const descriptionSelector = '.inzeraty .inzeratynadpis .popis';
  const detailUrlSelector = '.inzeraty .inzeratynadpis .nadpis a';
  console.log('1');
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

    await page
      // .goto(process.env.NEXT_PUBLIC_SCRAPE_URL, { timeout: 0 })
      .goto(
        'https://www.bazos.sk/hodnotenie.php?idmail=0&idphone=2284753&jmeno=Belancars',
        { timeout: 0 }
      )
      .then(async response => {});
    const html = await page.evaluate(() => {
      return document.querySelector('body').innerHTML;
    });

    const $ = load(html);

    const result = [];

    for (let i = 0; i < $(titleSelector).length; i++) {
      result.push({});
    }

    $(titleSelector).each((i, elem) => {
      result[i].title = $(elem).text();
    });
    $(priceSelector).each((i, elem) => {
      result[i].price = $(elem).text();
    });
    $(imgSelector).each((i, elem) => {
      result[i].previewImg = $(elem).attr('src');
    });
    $(detailUrlSelector).each((i, elem) => {
      result[i].detailUrl = $(elem).attr('href');
    });
    $(descriptionSelector).each((i, elem) => {
      result[i].description = $(elem).text();
    });

    await browser.close();
    res.status(200).json({ statusCode: 200, result });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export default getAllProducts;

export const config = {
  api: {
    externalResolver: true
  }
};
