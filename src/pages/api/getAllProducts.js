import cheerio from "cheerio";
import puppeteer from "puppeteer";
import chrome from "chrome-aws-lambda";

// const exePath = "/usr/bin/google-chrome-stable" || "/usr/bin/google-chrome";

const exePath = "/usr/bin/google-chrome-stable";

const getOptions = async () => {
  let options;
  if (process.env.NODE_ENV === "production") {
    options = {
      args: [...chrome.args, ["--no-sandbox"]],
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  } else {
    options = {
      args: ["--no-sandbox"],
      executablePath: exePath,
      headless: true,
    };
  }
  return options;
};

const getAllProducts = async (req, res) => {
  const titleSelector = ".inzeraty .inzeratynadpis .nadpis";
  const priceSelector = ".inzeraty .inzeratycena b";
  const imgSelector = ".inzeraty .inzeratynadpis a img";
  const descriptionSelector = ".inzeraty .inzeratynadpis .popis";
  const detailUrlSelector = ".inzeraty .inzeratynadpis .nadpis a";
  const properties = req.body.properties;

  try {
    const options = await getOptions();
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (request.resourceType() === "document") {
        request.continue();
      } else {
        request.abort();
      }
    });

    await page
      .goto(process.env.SCRAPE_URL, { timeout: 0 })
      .then(async (response) => {});
    const html = await page.evaluate(() => {
      return document.querySelector("body").innerHTML;
    });
    const $ = cheerio.load(html);

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
      result[i].previewImg = $(elem).attr("src");
    });
    $(detailUrlSelector).each((i, elem) => {
      result[i].detailUrl = $(elem).attr("href");
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
    externalResolver: true,
  },
};
