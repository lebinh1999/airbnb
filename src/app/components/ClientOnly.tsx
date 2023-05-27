"use client";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ClientOnly: React.FC<Props> = ({ children }) => {
  const [hasMoundted, setHasMoundted] = useState(false);
  useEffect(() => {
    setHasMoundted(true);
  }, []);
  if (!hasMoundted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
