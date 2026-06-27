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
  category: 'Web' | 'Mobile' | 'Backend' | 'AI' | 'DevOps' | 'Full Stack' | 'E-Commerce';
}

export interface Technology {
  name: string;
  category: string;
  icon?: string;
}
