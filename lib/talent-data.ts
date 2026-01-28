/**
 * TALENT DATA TEMPLATE
 * ====================
 * This file serves as the central database for all talent.
 * To add/update/remove talent, simply modify this file.
 * 
 * Each talent entry includes:
 * - Basic info (name, slug, gender, birthDate)
 * - Categories (acting, modeling, music)
 * - Bio and description
 * - Multiple photos
 * - Social media links
 * - Optional stats (height, location, etc.)
 */

export type Gender = "male" | "female" | "non-binary";
export type ActivityCategory = "acting" | "modeling" | "music";

export interface TalentSocials {
  instagram?: string;
  tiktok?: string;
  snapchat?: string;
  twitter?: string;
  youtube?: string;
  spotify?: string;
  website?: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  type: "modeling" | "collaboration" | "campaign" | "editorial";
  brand?: string;
}

export interface TalentPerson {
  // Basic Info
  id: string;
  slug: string; // URL-friendly name (e.g., "duncan-blue")
  name: string;
  gender: Gender;
  birthDate: string; // ISO format: "YYYY-MM-DD"
  
  // Categories - can be in multiple
  categories: ActivityCategory[];
  
  // Bio
  shortBio: string; // For cards (1-2 sentences)
  fullBio: string; // For detail page (full paragraph)
  
  // Photos
  primaryPhoto: string; // Main headshot
  photos: string[]; // Gallery of additional photos
  
  // Social Media
  socials: TalentSocials;
  
  // Optional Stats
  height?: string;
  location?: string;
  representation?: string;
  
  // Featured/Active status
  featured: boolean;
  active: boolean;
  
  // Portfolio & Work
  portfolio?: PortfolioItem[];
  notableWork?: string[];
}

/**
 * Calculate age from birth date
 */
export function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Get talent by slug
 */
export function getTalentBySlug(slug: string): TalentPerson | undefined {
  return talentRoster.find((t) => t.slug === slug);
}

/**
 * Get all talent slugs (for static generation)
 */
export function getAllTalentSlugs(): string[] {
  return talentRoster.filter((t) => t.active).map((t) => t.slug);
}

/**
 * Filter talent by gender and/or category
 */
export function filterTalent(
  gender?: Gender | "all",
  category?: ActivityCategory | "all"
): TalentPerson[] {
  return talentRoster.filter((talent) => {
    if (!talent.active) return false;
    
    const matchesGender = !gender || gender === "all" || talent.gender === gender;
    const matchesCategory =
      !category || category === "all" || talent.categories.includes(category);
    
    return matchesGender && matchesCategory;
  });
}

/**
 * TALENT ROSTER
 * =============
 * Add, update, or remove talent entries below.
 * Make sure each entry has a unique id and slug.
 */
export const talentRoster: TalentPerson[] = [
  {
    id: "1",
    slug: "duncan-blue",
    name: "Duncan Blue",
    gender: "male",
    birthDate: "1998-03-15",
    categories: ["acting", "modeling"],
    shortBio: "Versatile actor and model with a passion for bringing characters to life.",
    fullBio: "Duncan Blue is a versatile performer who has made a name for himself in both acting and modeling. With a natural charisma and dedication to his craft, Duncan brings authenticity to every role he takes on. His work spans commercials, short films, and brand campaigns for major lifestyle brands. When not on set, Duncan enjoys fitness, travel, and connecting with his growing social media community.",
    primaryPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/duncanblue",
      tiktok: "https://tiktok.com/@duncanblue",
      snapchat: "duncanblue",
    },
    height: "6'1\"",
    location: "Los Angeles, CA",
    featured: true,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
        title: "Lifestyle Brand Campaign",
        type: "campaign",
        brand: "Urban Outfitters"
      },
      {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
        title: "Editorial Shoot",
        type: "editorial",
        brand: "GQ Style"
      },
      {
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop",
        title: "Streetwear Collection",
        type: "modeling",
        brand: "Represent"
      },
    ],
    notableWork: ["Urban Outfitters", "GQ Style", "Represent CLO", "Nike"],
  },
  {
    id: "2",
    slug: "jackson-reed",
    name: "Jackson Reed",
    gender: "male",
    birthDate: "1999-07-22",
    categories: ["modeling", "music"],
    shortBio: "Model and emerging musician blending fashion with sound.",
    fullBio: "Jackson Reed is a multi-talented creative who seamlessly bridges the worlds of fashion and music. As a model, he's worked with leading streetwear and luxury brands, bringing an edgy authenticity to every shoot. His musical journey began with producing beats in his bedroom, and he's now developing a unique sound that resonates with Gen-Z audiences. Jackson's content showcases his lifestyle, fashion sense, and musical experiments.",
    primaryPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/jacksonreed",
      tiktok: "https://tiktok.com/@jacksonreed",
      snapchat: "jacksonreed",
      spotify: "https://spotify.com/artist/jacksonreed",
    },
    height: "5'11\"",
    location: "New York, NY",
    featured: true,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop",
        title: "Music Video Production",
        type: "collaboration",
        brand: "Sony Music"
      },
      {
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop",
        title: "Fashion Week Runway",
        type: "modeling",
        brand: "NYFW"
      },
      {
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1000&fit=crop",
        title: "Streetwear Campaign",
        type: "campaign",
        brand: "KITH"
      },
    ],
    notableWork: ["Sony Music", "KITH", "NYFW", "Beats by Dre"],
  },
  {
    id: "3",
    slug: "seth-mauer",
    name: "Seth Mauer",
    gender: "male",
    birthDate: "1997-11-08",
    categories: ["acting", "modeling"],
    shortBio: "Character actor with a commanding presence and versatile range.",
    fullBio: "Seth Mauer brings intensity and depth to every performance. With training in both classical and contemporary acting techniques, Seth has built a reputation for his ability to fully embody complex characters. His modeling work complements his acting career, with campaigns that showcase his striking features and expressive range. Seth is passionate about storytelling that challenges audiences and sparks conversation.",
    primaryPhoto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/sethmauer",
      tiktok: "https://tiktok.com/@sethmauer",
      snapchat: "sethmauer",
    },
    height: "6'0\"",
    location: "Atlanta, GA",
    featured: false,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
        title: "Film Still - Drama",
        type: "collaboration",
        brand: "A24 Films"
      },
      {
        image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800&h=1000&fit=crop",
        title: "Commercial Spot",
        type: "campaign",
        brand: "Lexus"
      },
    ],
    notableWork: ["A24 Films", "Lexus", "HBO Max"],
  },
  {
    id: "4",
    slug: "dieter-hamm",
    name: "Dieter Hamm",
    gender: "male",
    birthDate: "2000-02-14",
    categories: ["modeling"],
    shortBio: "High-fashion model known for editorial work and runway presence.",
    fullBio: "Dieter Hamm has quickly established himself as a rising star in the modeling world. With a unique look that catches the eye of top photographers and fashion directors, Dieter has graced the pages of leading publications and walked for emerging designers. His social media presence offers a behind-the-scenes look at the fashion industry, combined with lifestyle content that resonates with his audience.",
    primaryPhoto: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/dieterhamm",
      tiktok: "https://tiktok.com/@dieterhamm",
      snapchat: "dieterhamm",
    },
    height: "6'2\"",
    location: "Miami, FL",
    featured: true,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop",
        title: "Vogue Editorial",
        type: "editorial",
        brand: "Vogue"
      },
      {
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop",
        title: "Designer Runway",
        type: "modeling",
        brand: "Versace"
      },
      {
        image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&h=1000&fit=crop",
        title: "Luxury Campaign",
        type: "campaign",
        brand: "Gucci"
      },
      {
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop",
        title: "Cover Shoot",
        type: "editorial",
        brand: "Elle"
      },
    ],
    notableWork: ["Vogue", "Versace", "Gucci", "Elle Magazine"],
  },
  {
    id: "5",
    slug: "tommee-smith",
    name: "TommeE Smith",
    gender: "male",
    birthDate: "1996-09-30",
    categories: ["music", "acting"],
    shortBio: "Musician and actor bringing energy and authenticity to every project.",
    fullBio: "TommeE Smith is a dynamic performer whose talents span music and acting. As a musician, TommeE creates infectious beats and memorable hooks that have garnered millions of streams. His acting work showcases the same energy and authenticity that defines his music. TommeE's content connects with audiences through its genuine portrayal of the creative journey, from studio sessions to set life.",
    primaryPhoto: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/tommeesmith",
      tiktok: "https://tiktok.com/@tommeesmith",
      snapchat: "tommeesmith",
      spotify: "https://spotify.com/artist/tommeesmith",
      youtube: "https://youtube.com/@tommeesmith",
    },
    height: "5'10\"",
    location: "Chicago, IL",
    featured: false,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop",
        title: "Album Cover Art",
        type: "collaboration",
        brand: "Atlantic Records"
      },
      {
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1000&fit=crop",
        title: "Live Performance",
        type: "collaboration",
        brand: "Coachella"
      },
    ],
    notableWork: ["Atlantic Records", "Coachella", "Apple Music"],
  },
  {
    id: "6",
    slug: "noah-honeywell",
    name: "Noah Honeywell",
    gender: "male",
    birthDate: "2001-05-18",
    categories: ["modeling", "acting"],
    shortBio: "Fresh face in modeling with a growing portfolio in commercial acting.",
    fullBio: "Noah Honeywell represents the new generation of talent breaking into the industry. With a natural ease in front of the camera and an approachable presence, Noah has quickly built a portfolio of modeling work for youth-focused brands. His acting career is developing alongside his modeling, with recent bookings in commercials and digital content. Noah's authentic social media presence has attracted a loyal following.",
    primaryPhoto: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/noahhoneywell",
    },
    height: "5'11\"",
    location: "Los Angeles, CA",
    featured: false,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=1000&fit=crop",
        title: "Youth Campaign",
        type: "campaign",
        brand: "Adidas"
      },
      {
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=1000&fit=crop",
        title: "Commercial Spot",
        type: "campaign",
        brand: "Gap"
      },
    ],
    notableWork: ["Adidas", "Gap", "Hollister"],
  },
  {
    id: "7",
    slug: "kadale-williams",
    name: "Kadale Williams",
    gender: "male",
    birthDate: "1998-12-03",
    categories: ["music", "modeling"],
    shortBio: "R&B artist and model with a smooth style and soulful sound.",
    fullBio: "Kadale Williams is an R&B artist whose velvety vocals and heartfelt lyrics have captured attention across streaming platforms. His modeling career complements his music, with both pursuits showcasing his signature smooth style and confident presence. Kadale draws inspiration from classic soul and contemporary R&B, creating a sound that feels both timeless and fresh. His content offers fans an intimate look at his creative process and lifestyle.",
    primaryPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/kadalewilliams",
      tiktok: "https://tiktok.com/@kadalewilliams",
      snapchat: "kadalewilliams",
      spotify: "https://spotify.com/artist/kadalewilliams",
    },
    height: "6'0\"",
    location: "Atlanta, GA",
    featured: true,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&h=1000&fit=crop",
        title: "Music Video",
        type: "collaboration",
        brand: "Def Jam"
      },
      {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
        title: "Fashion Editorial",
        type: "editorial",
        brand: "Hypebeast"
      },
      {
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop",
        title: "Brand Partnership",
        type: "campaign",
        brand: "Puma"
      },
    ],
    notableWork: ["Def Jam Records", "Hypebeast", "Puma", "BET"],
  },
  {
    id: "8",
    slug: "hollis-mick",
    name: "Hollis Mick",
    gender: "male",
    birthDate: "1999-08-25",
    categories: ["acting"],
    shortBio: "Dramatic actor with a focus on indie film and streaming content.",
    fullBio: "Hollis Mick is a dedicated actor who has found his niche in independent film and streaming productions. With a thoughtful approach to character development and a willingness to take on challenging roles, Hollis has built a reputation as a reliable and talented performer. His work spans drama, thriller, and coming-of-age stories. Off-screen, Hollis is passionate about film history and often shares his insights with his social media community.",
    primaryPhoto: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/hollismick",
      tiktok: "https://tiktok.com/@hollismick",
      snapchat: "hollismick",
    },
    height: "5'9\"",
    location: "New York, NY",
    featured: false,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1000&fit=crop",
        title: "Indie Film",
        type: "collaboration",
        brand: "Sundance"
      },
      {
        image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&h=1000&fit=crop",
        title: "Streaming Series",
        type: "collaboration",
        brand: "Netflix"
      },
    ],
    notableWork: ["Sundance", "Netflix", "AMC"],
  },
  {
    id: "9",
    slug: "bradley-buter",
    name: "Bradley Buter",
    gender: "male",
    birthDate: "2000-04-12",
    categories: ["modeling", "music"],
    shortBio: "Model and producer creating visual and sonic experiences.",
    fullBio: "Bradley Buter is a creative force working at the intersection of fashion and music. As a model, Bradley has collaborated with streetwear brands and lifestyle publications, bringing a youthful energy to every project. His music production work focuses on electronic and hip-hop beats, with several tracks gaining traction on streaming platforms. Bradley's content showcases his dual passions and offers a glimpse into the creative process behind both pursuits.",
    primaryPhoto: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=800&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&h=1000&fit=crop",
    ],
    socials: {
      instagram: "https://instagram.com/bradleybuter",
      tiktok: "https://tiktok.com/@bradleybuter",
      snapchat: "bradleybuter",
      spotify: "https://spotify.com/artist/bradleybuter",
    },
    height: "6'0\"",
    location: "Los Angeles, CA",
    featured: false,
    active: true,
    portfolio: [
      {
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=1000&fit=crop",
        title: "Producer Session",
        type: "collaboration",
        brand: "Interscope"
      },
      {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
        title: "Fashion Campaign",
        type: "campaign",
        brand: "H&M"
      },
      {
        image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=800&h=1000&fit=crop",
        title: "Music Festival",
        type: "collaboration",
        brand: "Rolling Loud"
      },
    ],
    notableWork: ["Interscope Records", "H&M", "Rolling Loud"],
  },
];

/**
 * CATEGORY DISPLAY INFO
 */
export const categoryInfo: Record<ActivityCategory, { label: string; description: string }> = {
  acting: {
    label: "Acting",
    description: "Film, television, commercials, and digital content",
  },
  modeling: {
    label: "Modeling",
    description: "Fashion, commercial, editorial, and brand campaigns",
  },
  music: {
    label: "Music",
    description: "Recording artists, producers, and performers",
  },
};

export const genderInfo: Record<Gender, { label: string }> = {
  male: { label: "Male" },
  female: { label: "Female" },
  "non-binary": { label: "Non-Binary" },
};
