export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface Post {
  title: string;
  content: string;
}

export interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostsPageProps {
  posts: PostProps[];
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

export interface UsersPageProps {
  users: UserProps[];
}
