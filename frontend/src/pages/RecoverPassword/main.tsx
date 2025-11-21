import type { RecoverPasswordPageProps } from './types';

/**
 * @page RecoverPasswordPage
 * @summary Password recovery request page
 * @domain auth
 * @type page-component
 * @category authentication
 */
export const RecoverPasswordPage = (props: RecoverPasswordPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Recover Password</h2>
          <p className="text-gray-600 mt-2">Enter your email to receive recovery instructions</p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
