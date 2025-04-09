import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Protected({ authentication = true, children }) {
  const [loading, setLoading] = useState(true);
  const isAuth = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication === true && isAuth !== authentication) {
      navigate("/login");
    } else if (!authentication && isAuth !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [isAuth, navigate, authentication]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg font-medium">Please wait...</p>
      </div>
    );
  }

  return <>{children}</>;
}

export default Protected;
