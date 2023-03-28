import chrome from 'chrome-aws-lambda';

const exePath = '/usr/bin/google-chrome-stable';

const getChromeOptions = async () => {
  let options;
  if (process.env.NODE_ENV === 'production') {
    options = {
      args: [...chrome.args, ['--no-sandbox']],
      executablePath: await chrome.executablePath,
      headless: chrome.headless
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
