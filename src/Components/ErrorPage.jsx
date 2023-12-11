import { IoMdArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {

  const goBack = () => {
    window.history.back();
  }

  return (
   
<div className="grid h-screen place-content-center bg-white px-4">
<img className="w-[500px] rounded-xl mb-10" src="https://media.giphy.com/media/q69ME0ooMhyl5jdbGW/giphy.gif" alt="" />
  <h1 className="uppercase text-center tracking-widest text-gray-500">404 | Not Found</h1>
  <button onClick={goBack} className="btn mt-10 btn-warning"><IoMdArrowRoundBack className="text-xl" />Go Back</button>
</div>
  );
};

export default ErrorPage;
