export const DefaultBtn = (props) => (
  <button
    {...props}
    className="border px-12 py-2 text-white py rounded-lg bg-blue max-w-fit hvr-forward"
  >
    {props.text}
  </button>
);
