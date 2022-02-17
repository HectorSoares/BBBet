type CrownProps = {
  color?: string;
  size?: number;
};

const Crown = ({ color, size }: CrownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(200, 200, 0, 0.54)"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"
      fill="currentColor"
    />
  </svg>
);

Crown.defaultProps = {
  color: "black",
  size: 24,
};

export default Crown;
