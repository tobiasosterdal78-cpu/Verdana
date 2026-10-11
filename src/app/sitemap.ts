import type { MetadataRoute } from "next";
import { LOCALE_TAGS, LOCALES } from "@/lib/i18n";
import { ALL_ROUTES, alternates } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/** Every page in both languages, each listing its counterpart as an alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.flatMap((route) => {
    const paths = alternates(route);
    const languages = Object.fromEntries([
      ...LOCALES.map((locale) => [LOCALE_TAGS[locale], absoluteUrl(paths[locale])]),
      ["x-default", absoluteUrl(paths.en)],
    ]);
    return LOCALES.map((locale) => ({
      url: absoluteUrl(paths[locale]),
      alternates: { languages },
    }));
  });
}
