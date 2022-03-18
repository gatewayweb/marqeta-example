export default function findSection(sectionName, sections) {
  if (!sectionName || !sections || !sections.length) return null;

  return sections.find((section) => section.name === sectionName);
}
