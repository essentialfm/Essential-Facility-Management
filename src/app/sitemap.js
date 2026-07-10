import { getCanonicalUrl, locations } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/compare", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    ...Object.keys(locations).map((city) => ({
      path: `/locations/${city}`,
      priority: 0.8,
      changeFrequency: "monthly",
    })),
  ];

  return routes.map((r) => ({
    url: getCanonicalUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
