export interface AuthSlice {
  user: any | null;
  authenticated: boolean;
  loading: boolean;
  error: string | null;
  token:string;
}

export const initialAuthSlice: AuthSlice = {
  user: null,
  authenticated: false,
  loading: false,
  error: null,
  token:''
};