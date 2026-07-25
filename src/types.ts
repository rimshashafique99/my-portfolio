export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  liveUrl?: string;
  repoUrl?: string;
  backendRepoUrl?: string; // add this field to your Project type
  category: 'Web' | 'Mobile' | 'Backend' | 'AI' | 'DevOps' | 'Full Stack' | 'E-Commerce';
}

export interface Technology {
  name: string;
  category: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  context: string;
  link?: string;
}
