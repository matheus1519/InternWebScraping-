import puppeteer from "puppeteer";
import downloadPDF from "download-pdf";

async function init() {
  const url =
    "http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar";

  const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();

  await page.goto(url);
  await page.click("div div div a.alert-link");
  await page.click("a.btn.btn-primary.btn-sm.center-block");

  downloadPDF(page.url(), { filename: "Padrao TISS Recente.pdf" }, (err) => {
    if (!err) {
      console.log("Downloaded with Success!");
    }

    browser.close();
  });
}

init();
