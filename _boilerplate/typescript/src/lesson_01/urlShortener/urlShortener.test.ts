import { JsonableValue } from "ts-jest";
import { urlShortener } from "./urlShortener";

describe("urlShortener", () => {
  it("should be able to handle multiple urls", () => {
    const shortener = urlShortener();

    const longURl1 = "https://www.codelex.io/kontakti";
    const shortUrl = shortener.shorten(longURl1);

    const longUrl2 = "https://www.codelex.io/citi";
    const shortUrl2 = shortener.shorten(longUrl2);

    expect(shortUrl).toBe("https://short.url/0");
    expect(shortUrl2).toBe("https://short.url/1");
  });

  it("should know how many times url shortener has been called", () => {
    const shortener = urlShortener();

    const long1 = "https://www.lala1.com";
    const long2 = "https://www.lala2.com";
    const long3 = "https://www.lala3.com";
    shortener.shorten(long1);
    shortener.shorten(long2);
    shortener.shorten(long3);

    expect(shortener.entries.length).toBe(3);
  });
});
