import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();

  if (to === "-1") {
    return (
      <button
        onClick={() => navigate(-1, { replace: true })}
        className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
