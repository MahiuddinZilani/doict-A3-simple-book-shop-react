import { useRouteError } from "react-router-dom";
import Root from "../../Layout/Root";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen">
      <Root></Root>
      <div
        id="error-page"
        className="h-screen flex flex-col items-center justify-center gap-4 font-bold text-3xl"
      >
        <img src="./images/oops.png" alt="" />
        {/* <h1 className="font-bold text-5xl">Oops!</h1> */}
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
