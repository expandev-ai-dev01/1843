import type { ResetPasswordPageProps } from './types';

/**
 * @page ResetPasswordPage
 * @summary Password reset page with token validation
 * @domain auth
 * @type page-component
 * @category authentication
 */
export const ResetPasswordPage = (props: ResetPasswordPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-gray-600 mt-2">Enter your new password</p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
