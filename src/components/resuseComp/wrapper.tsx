import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="max-w-7xl px-7 lg:px-9 mx-auto">{children}</div>;
};

export default Wrapper;