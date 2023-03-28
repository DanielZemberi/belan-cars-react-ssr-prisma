import chromium from '@sparticuz/chromium-min';

const exePath = '/usr/bin/google-chrome-stable';

const getChromeOptions = async () => {
  let options;
  if (process.env.NODE_ENV === 'production') {
    options = {
      args: [...chromium.args, ['--no-sandbox']],
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    };
  } else {
    options = {
      args: ['--no-sandbox'],
      executablePath: exePath,
      headless: true
    };
  }
  return options;
};

export default getChromeOptions;
