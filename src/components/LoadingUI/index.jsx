import { Spinner } from "@nextui-org/react";
import "./index.css"
const Loading = () => {
  return (
    <div className="loading">
      <Spinner size="xl" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
