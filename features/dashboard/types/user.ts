export interface User {
    id: number;
    name: string;
    email: string;
    avatar_url?: string;
  
    role: {
      id: number;
      name: string;
    };
  }