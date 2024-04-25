import fs from 'node:fs';
import path from 'path';
import puppeteer from 'puppeteer';

const rewriteHtml = async (htmlPaths) => {
  const browser = await puppeteer.launch();

  for (const htmlPath of htmlPaths) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const page = await browser.newPage();
    await page.setContent(html);
    const diagramDoms = await page.$$('.railroad-diagram-output');

    for (const [idx, diagramDom] of diagramDoms.entries()) {
      const diagramHtml = await page.evaluate((dom) => dom.innerHTML, diagramDom);
      if (!/^\s*<svg/.test(diagramHtml)) {
        continue;
      }
      const diagramImage = await diagramDom.screenshot({ omitBackground: false, encoding: 'base64' });
      const imgDom = `<img src="data:image/png;base64,${diagramImage}" />`;
      await page.evaluate(
        (img, idx) => {
          const dom = document.querySelectorAll('.railroad-diagram-output')?.[idx];
          dom && (dom.innerHTML = img);
        },
        imgDom,
        idx
      );
      console.log(`Replaced SVG with image idx=${idx} in ${htmlPath}`);
    }

    // const pdf = await page.pdf();
    // fs.writeFileSync(htmlPath.replace('.html', '.pdf'), pdf);

    const pageContent = await page.content();
    fs.writeFileSync(htmlPath, pageContent);

    await page.close();
  }

  await browser.close();
};


const getHtmlFiles = (dirPath) => {
  let htmlFiles = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.resolve(dirPath, entry.name);
    if (entry.isDirectory()) {
      htmlFiles = [...htmlFiles, ...getHtmlFiles(fullPath)];
    } else if (entry.isFile() && path.extname(fullPath) === '.html') {
      htmlFiles.push(fullPath);
    }
  }

  return htmlFiles;
};

// const html2Pdf = async (htmlPaths) => {
//   const browser = await puppeteer.launch();

//   for (const htmlPath of htmlPaths) {
//     const html = fs.readFileSync(htmlPath, 'utf8');
//     const page = await browser.newPage();
//     await page.setContent(html);

//     const pdf = await page.pdf();
//     fs.writeFileSync(htmlPath.replace('.html', '.pdf'), pdf);

//     await page.close();
//   }

//   await browser.close();
// };

const htmlFiles = getHtmlFiles('../site');
await rewriteHtml(htmlFiles);
// html2Pdf(htmlFiles);
