'use client';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SigninForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        const data = new FormData(event.currentTarget);

        const loginData = {
            email: data.get('email') as string,
            password: data.get('password') as string,
        };

        try {
            const response = await fetch('http://localhost:4000/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const responseData = await response.json();
            localStorage.setItem('accessToken', responseData.token);

            // Handle successful login by redirecting to the home page
            router.push('/');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Paper elevation={6} className="p-12 mt-28 mb-28 rounded-md">
            <Box className="flex flex-col justify-center">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit} className="mt-1 w-full">
                    <div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </div>
                    {error && (
                        <h2 className="mb-4 text-red-500">
                            {error}
                        </h2>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="mt-3 mb-2 rounded-xl"
                    >
                        Sign In
                    </Button>
                    <div className="flex flex-col justify-center mt-3">
                        <Link href="#" className="text-sm text-blue-600">
                            Forgot password?
                        </Link>
                        <Link href="#" className="text-sm">
                            Don&apos;t have an account? <span className="text-blue-600">Sign Up</span>
                        </Link>
                    </div>
                </form>
            </Box>
        </Paper>
    );
}
