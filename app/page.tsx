import React from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function page() {
    const { isSignedIn, signOut } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push('/sign-in');
    };
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Chào mừng đến với trang chủ</h1>
            {isSignedIn ? (
                <div>
                    <button onClick={handleSignOut} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Đăng xuất
                    </button>
                </div>
            ) : (
                <div>
                    <button onClick={() => router.push('/sign-in')} style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Đăng nhập
                    </button>
                </div>
            )}
        </div>
    );
}
