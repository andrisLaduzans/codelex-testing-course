interface UrlEntry {
  longUrl: string;
  shortUrl: string;
}

export const urlShortener = () => {
  let counter = 0;
  const entries: UrlEntry[] = [];

  const shorten = (longUrl: string) => {
    const shortUrl = "https://short.url/" + counter;

    counter += 1;

    entries.push({
      longUrl,
      shortUrl,
    });

    return shortUrl;
  };

  const translate = (shortUrl: string) => {
    const entry = entries.find((e) => e.shortUrl === shortUrl);
    if (!entry) {
      return;
    }
    return entry.longUrl;
  };

  return {
    shorten,
    translate,
    entries,
  };
};
