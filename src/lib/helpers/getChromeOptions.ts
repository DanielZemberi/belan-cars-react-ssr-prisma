import chromium from '@sparticuz/chromium-min';

const exePath = '/usr/bin/google-chrome-stable';

const getChromeOptions = async () => {
  // let options;
  // if (process.env.NODE_ENV === 'production') {
  return {
    args: [...chromium.args, ['--hide-scrollbars', '--disable-web-security']],
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  };
  // } else {
  //   options = {
  //     args: ['--no-sandbox'],
  //     executablePath: exePath,
  //     headless: true
  //   };
  // }
};

export default getChromeOptions;
