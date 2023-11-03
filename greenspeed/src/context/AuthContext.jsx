import { createContext, useState } from "react";
import Swal from "sweetalert2";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [onChange, setonChange] = useState(false);

  const requestTransport = (
    hour,

  ) => {
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hour,
        
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          Swal.fire("Success", response.success, "success");
          setonChange(!onChange);
        } else {
          Swal.fire("Error", "Something went wrong", "error");
        }
      });
  };
  const contextData = {
    requestTransport,
  };
  return (
    <div>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
