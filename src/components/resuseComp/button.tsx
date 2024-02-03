import { NextPage } from "next";

interface ButtonProps {
  content: string;
  color: string;
  border?: string;
}

const Button: NextPage<ButtonProps> = ({ content, color, border }) => {
  return (
    <div>
      <button
        type="button"
        className={`text-white ${color} ${border} font-medium rounded-full text-sm md:px-10 px-6 py-3 me-2 mb-2`}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;