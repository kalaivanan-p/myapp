// components/SignInGoogle.jsx
'use client';

import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function SignInGoogle() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
      alert('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={loading}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        backgroundColor: '#4285F4',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      {loading ? 'Signing in...' : 'Sign in with Google'}
    </button>
  );
}
