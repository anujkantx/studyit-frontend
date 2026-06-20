type RoleResponse = {
    id : number
    name: string
    description: string | null
    created_at: string
}

type UserResponse = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    status: string;
    created_at: string;
    updated_at: string | null;
    last_login_at: string | null;
    role: RoleResponse;
    avatar_url?: string;
  };
