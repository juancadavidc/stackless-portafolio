export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  category: "landing-pages" | "ecommerce" | "automations" | "custom-software";
  image: string;
  tags: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CasesConfig {
  categories: {
    id: string;
    label: string;
    description: string;
    icon: string;
  }[];
  cases: CaseStudy[];
}
