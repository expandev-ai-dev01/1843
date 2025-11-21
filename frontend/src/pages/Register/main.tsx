import type { RegisterPageProps } from './types';

/**
 * @page RegisterPage
 * @summary Registration page for new users
 * @domain auth
 * @type page-component
 * @category authentication
 */
export const RegisterPage = (props: RegisterPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Register</h2>
          <p className="text-gray-600 mt-2">Create a new account</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
