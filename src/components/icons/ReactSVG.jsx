import "./styles/reactsvg.scss";

export default function ReactSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      className="react-logo"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" className="react-circle" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" className="react-ellipse" />
        <ellipse
          rx="11"
          ry="4.2"
          className="react-ellipse"
          transform="rotate(60)"
        />
        <ellipse
          rx="11"
          ry="4.2"
          className="react-ellipse"
          transform="rotate(120)"
        />
      </g>
    </svg>
  );
}
