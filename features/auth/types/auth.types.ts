export interface User {
    id: number;
    name: string;
    email: string;
    avatar_url: string;
    role: string;
  }
  
  export interface LoginResponse {
    success: boolean;
    user: User;
  }