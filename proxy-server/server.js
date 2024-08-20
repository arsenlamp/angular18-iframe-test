import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const url = "http://localhost:4200";
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    const aziText = await page.evaluate(() => {
      const element = document.querySelector(
        "span.pd-data-value[data-bind='text: Shadows.timeOfDay.azimuthAngle']"
      );
      return element ? element.textContent : "";
    });

    const altText = await page.evaluate(() => {
      const element = document.querySelector(
        "span.pd-data-value[data-bind='text: Shadows.timeOfDay.altitudeAngle']"
      );
      return element ? element.textContent : "";
    });

    console.log(`Azimuth Angle: ${aziText}, Altitude Angle: ${altText}`);

    await browser.close();

    res.json({ azi: aziText, alt: altText });
  } catch (error) {
    console.error("Error fetching and parsing content:", error);
    res.status(500).json({ error: "Failed to fetch content" });
  }
});

app.listen(3000, () => {
  console.log("CORS Proxy server is running on http://localhost:3000");
});
