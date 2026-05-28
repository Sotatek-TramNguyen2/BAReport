import { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export function Login({ onLoginSuccess }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<'invalid-domain' | 'not-registered' | null>(null);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    // Simulate OAuth flow
    setTimeout(() => {
      // Mock authentication - in real app this would be OAuth flow
      const mockEmail = 'user@sotatek.com'; // Change this to test different scenarios

      // Check email domain
      if (!mockEmail.endsWith('@sotatek.com')) {
        setError('invalid-domain');
        setIsLoading(false);
        return;
      }

      // Check if user exists in system (mock check)
      const userExists = true; // Change to false to test not-registered error

      if (!userExists) {
        setError('not-registered');
        setIsLoading(false);
        return;
      }

      // Success
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[420px] p-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-[#111827]">
              BA Weekly Reporting
            </h1>
            <p className="text-sm text-[#6B7280]">
              Đăng nhập để tiếp tục
            </p>
          </div>

          {/* Google SSO Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full h-12 bg-white border border-[#E5E7EB] rounded-lg shadow-sm hover:bg-[#F9FAFB] hover:border-[#D1D5DB] active:bg-[#F3F4F6] disabled:bg-[#F3F4F6] disabled:border-[#E5E7EB] transition-colors flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 text-[#6B7280] animate-spin" />
                <span className="text-sm font-medium text-[#6B7280]">
                  Đang xác thực...
                </span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium text-[#374151]">
                  Đăng nhập bằng Google
                </span>
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="w-full bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-3 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#991B1B] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#991B1B]">
                {error === 'invalid-domain' && 'Chỉ email @sotatek.com được phép đăng nhập.'}
                {error === 'not-registered' && 'Tài khoản chưa được đăng ký trong hệ thống. Liên hệ quản lý.'}
              </p>
            </div>
          )}

          {/* Helper Text */}
          <p className="text-xs text-[#9CA3AF]">
            Sử dụng email @sotatek.com để đăng nhập
          </p>
        </div>
      </div>
    </div>
  );
}
