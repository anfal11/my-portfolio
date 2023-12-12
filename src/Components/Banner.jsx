import { IoMdDownload } from 'react-icons/io';
import pic from '../../public/pic2.jpg';
import './Banner.css';

const pdf = '../../public/latestCV.pdf';

const Banner = () => {
  const downloadPDF = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdf;

    iframe.onload = () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const downloadLink = doc.createElement('a');
      downloadLink.href = pdf;
      downloadLink.download = 'Anfal_CV.pdf';
      doc.body.appendChild(downloadLink);
      downloadLink.click();
      doc.body.removeChild(downloadLink);
      iframe.remove();
    };

    document.body.appendChild(iframe);
  };

  return (
    <div className="max-w-[1520px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mt-20 mx-20 gap-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-4">Hello, I am Anfal</h1>
          <h2 className="text-2xl font-semibold mb-4">Junior MERN Stack Developer</h2>
          <p className="text-lg mb-6">
            I am passionate about creating responsive and user-friendly web experiences. Skilled in HTML, CSS, JavaScript,
            React, ExpressJs, and MongoDB.
          </p>
          <button
            onClick={downloadPDF}
            className="flex px-2 py-2 rounded-lg items-center gap-2 bg-black text-white hover:bg-gray-700"
          >
            <IoMdDownload /> Download CV
          </button>
        </div>
        <img src={pic} className="one w-96 lg:w-[430px] xl:w-[550px]" alt="Anfal Image" />
      </div>
    </div>
  );
};

export default Banner;
