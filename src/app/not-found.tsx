/* eslint-disable @next/next/no-html-link-for-pages */
const NotFound = () => {
  return (
    <div className="text-center flex flex-col w-full h-screen justify-center items-center gap-2">
      <h2 className="text-3xl">Not Found route that you are looking for</h2>

      <a
        href="/"
        className="underline text-red-500 border border-red-600 p-4 rounded-md"
      >
        Back To Home
      </a>
    </div>
  );
};

export default NotFound;
