import { Link } from "react-router-dom";
import "../../styles/buttons.scss";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ArrowedButton = ({
  label,
  action,
  page,
  isDisabled = false,
  className,
}) => {
  // const dispatch = useDispatch();

  return (
    <>
      <a
        disabled={isDisabled}
        onClick={action}
        className="arrowed-btn"
      >
        <div className={`button-text ${className}`}>
          <p> {label}</p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/660d31df598571a9a961b06f/6610070e2e5cedbbc72dd47f_formkit_arrowright.svg"
          loading="lazy"
          alt=""
        />
      </a>
    </>
  );

  if (page)
    return (
      <>
        {/* <Link to={page} className={`filled-btn ${playIcon ? "with-icon" : ""}`}> */}
        <Link to={page} className="filled-btn">
          <div className="align-content">
            {/* <img src={playIcon} alt="Play Icon"></img> */}
            <p> {label}</p>
          </div>
        </Link>
      </>
    );

  return <></>;
};

export default ArrowedButton;
