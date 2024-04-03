import React from 'react';

function Download() {

  const handleDownload = () => {
    // Replace 'your_resume_file_path' with the actual path of your resume file
    const resumeFilePath = 'new_resume.pdf';
    // Triggering download
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'new_resume.pdf'; // You can customize the downloaded file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-white w-full flex justify-center items-center rounded-b-xl pb-10'>
      <div 
        className='bg-slate-600 w-1/2 h-[10vw] rounded-xl flex justify-center items-center hover:cursor-pointer hover:bg-slate-400'
        onClick={handleDownload}
      >
        <h2 className='uppercase text-2xl hover:text-black'>Download Resume</h2>
      </div>
    </div>
  );
}

export default Download;
