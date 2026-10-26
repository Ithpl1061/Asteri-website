import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Users/Admin/.cache/puppeteer/chrome/win64-154.0.8037.57/chrome-win64/chrome.exe',
    headless: "new"
  });
  const page = await browser.newPage();
  
  async function checkWidth(width, height) {
    await page.setViewport({ width, height });
    await page.goto('http://localhost:8080/services', { waitUntil: 'networkidle0' });
    
    const result = await page.evaluate((w, h) => {
      // Find the desktop partner grid h2
      const grid = document.querySelector('.figma-services__partner-grid--desktop');
      const h2 = grid.querySelector('h2');
      const styles = window.getComputedStyle(h2);
      
      const computedStyles = {
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
      };
      
      // Check visibility of h2 and logo rows
      const h2Rect = h2.getBoundingClientRect();
      const logos = grid.querySelector('.figma-services__partner-card');
      const logosRect = logos.getBoundingClientRect();
      
      // Check if both fit within viewport (0 to height)
      const isVisible = (
        h2Rect.top >= 0 && 
        logosRect.bottom <= h
      );
      
      // We also check if logos are cut off by their container or overlapping
      // A quick check is just to see if logosRect.bottom is within viewport
      
      return { computedStyles, isVisible, h2Top: h2Rect.top, logosBottom: logosRect.bottom, viewportHeight: h };
    }, width, height);
    
    console.log(`\n--- Width: ${width}px, Height: ${height}px ---`);
    console.log(`Computed Styles:`, result.computedStyles);
    console.log(`Visible in viewport: ${result.isVisible} (h2 top: ${result.h2Top}, logos bottom: ${result.logosBottom})`);
  }

  await checkWidth(1280, 720);
  await checkWidth(1920, 1080);
  await checkWidth(1366, 768);

  await browser.close();
})();
