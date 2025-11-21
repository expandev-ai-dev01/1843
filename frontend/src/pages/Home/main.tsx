import { useNavigate } from 'react-router-dom';
import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page with navigation to authentication features
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = (props: HomePageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SafeLogin</h1>
          <p className="text-gray-600 mb-8">Secure authentication system</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
          >
            Login
          </button>

          <button
            onClick={() => navigate('/register')}
            className="w-full px-4 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 font-medium"
          >
            Register
          </button>

          <button
            onClick={() => navigate('/recover-password')}
            className="w-full px-4 py-3 bg-transparent text-blue-600 rounded-md hover:bg-blue-50 font-medium"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
