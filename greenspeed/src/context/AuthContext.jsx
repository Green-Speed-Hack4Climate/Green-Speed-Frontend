import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setonChange] = useState(false);

  const requestTransport = (
    time,
    currentLocation,
    destination,
    modeOfTransport
  ) => {
    fetch("/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        time,
        currentLocation,
        destination,
        modeOfTransport,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Error", response.error, "error");
        } else if (response.success) {
          nav("/resources");
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
