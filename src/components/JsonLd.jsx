/**
 * Renders a JSON-LD <script> for Schema.org structured data.
 * Pass a plain object (or array) as `data`.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
