import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
    const token = true;
    const memoizedChildren = React.useMemo(() => children, [children]);
  
    return (
      <div>
        {token ? (
          <>
                {memoizedChildren}
          </>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    );
  };
  
export default ProtectedRoute;
