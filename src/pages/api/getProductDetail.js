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

const getProductDetail = async (req, res) => {
  const { method, body } = req;

  if (method !== "POST" || !body) {
    res.status(400);
    return res.end();
  }

  const { url } = body;

  const imagesSelector = ".fliobal .flinavigace .obrazekflithumb";
  const descriptionSelector = ".maincontent .popisdetail";

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

    await page.goto(url, { timeout: 0 }).then(async (response) => {});
    const html = await page.evaluate(() => {
      return document.querySelector("body").innerHTML;
    });
    const $ = cheerio.load(html);

    const result = {
      images: [],
      description: [],
    };

    $(imagesSelector).each((i, elem) => {
      result.images.push($(elem).attr("src"));
    });

    $(descriptionSelector).each((i, elem) => {
      const element = [...$(elem).contents()]
        .filter((e) => e.type === "text" && $(e).text().trim())
        .map((e) => $(e).text().trim());

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
    externalResolver: true,
  },
};
