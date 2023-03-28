import axios from 'axios';

import getChromeOptions from '../../lib/helpers/getChromeOptions';
import { load } from 'cheerio';
import puppeteer from 'puppeteer';

const handler = async (req, res) => {
  const options = await getChromeOptions();
  const browser = await puppeteer.launch(options);

  console.log('browser', browser);

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    // console.log('res', res.data);
    return res.status(200).json({ message: 'success', data: response.data });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({ message: 'erropr' });
  }
};

export default handler;
