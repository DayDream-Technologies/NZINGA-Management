import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTalentBySlug,
  getAllTalentSlugs,
  calculateAge,
  categoryInfo,
} from "@/lib/talent-data";
import TalentDetailClient from "./talent-detail-client";

interface TalentPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for all talent
export async function generateStaticParams() {
  const slugs = getAllTalentSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each talent page
export async function generateMetadata({
  params,
}: TalentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const talent = getTalentBySlug(slug);

  if (!talent) {
    return {
      title: "Talent Not Found | NZINGA Management",
    };
  }

  const age = calculateAge(talent.birthDate);
  const categories = talent.categories.map((c) => categoryInfo[c].label).join(", ");

  return {
    title: `${talent.name} | NZINGA Management`,
    description: `${talent.name}, ${age} - ${categories}. ${talent.shortBio}`,
    openGraph: {
      title: `${talent.name} | NZINGA Management`,
      description: talent.shortBio,
      images: [talent.primaryPhoto],
    },
  };
}

export default async function TalentPage({ params }: TalentPageProps) {
  const { slug } = await params;
  const talent = getTalentBySlug(slug);

  if (!talent) {
    notFound();
  }

  return <TalentDetailClient talent={talent} />;
}
