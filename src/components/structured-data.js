import { getOrganizationSchema, getWebsiteSchema } from "@/lib/site";

export function StructuredData() {
  const graph = [getOrganizationSchema(), getWebsiteSchema()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
