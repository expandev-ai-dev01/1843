import type { LoginPageProps } from './types';

/**
 * @page LoginPage
 * @summary Login page for user authentication
 * @domain auth
 * @type page-component
 * @category authentication
 */
export const LoginPage = (props: LoginPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
