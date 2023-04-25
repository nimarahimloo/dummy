import { useContext } from 'react';
import { AuthContext } from '../contexts/JWTContext';

/**
 * Use Auth Context
 * @returns {{logout: (function(): Promise<void>), forgotPassword: (function(): Promise<void>), method: string, updateProfile: (function(): Promise<void>), isVerified: boolean, isInitialized: boolean, verify: (function(): Promise<void>), isAuthenticated: boolean, login: (function(): Promise<void>), user: null, changePassword: (function(): Promise<void>)}}
 */
const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('Auth context must be use inside AuthProvider');

    return context;
};

export default useAuth;
