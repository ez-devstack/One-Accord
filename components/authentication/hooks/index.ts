import { createBrowserClient } from '@supabase/ssr';

const useSocialAuth = () => {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
    
      const loginWithGoogle = () => {
        supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
            redirectTo: `${location.origin}/api/auth/callback/`,
          },
        });
      };
    
      const loginWithFacebook = () => {
        supabase.auth.signInWithOAuth({
          provider: 'facebook',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
            redirectTo: `${location.origin}/api/auth/callback/`,
          },
        });
      };
    
      const loginWithApple = () => {
        supabase.auth.signInWithOAuth({
          provider: 'apple',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
            redirectTo: `${location.origin}/api/auth/callback/`,
          },
        });
      };

      return {
        loginWithGoogle, 
        loginWithFacebook, 
        loginWithApple
      }
}

export default useSocialAuth;