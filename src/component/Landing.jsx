import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Landing() {
  const [rotate, setRotate] = useState(0);
  const [textLines, setTextLines] = useState([]);
  const [typedText, setTypedText] = useState(["", "", ""]); // Initialize with empty strings
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50); // Speed of typing animation (milliseconds per character)
  const [showFace, setShowFace] = useState(false); // State to control whether to show the animated face div
  const [showVideo, setShowVideo] = useState(false); // State to control whether to show the background video

  useEffect(() => {
    // Mouse move handler to update rotation angle
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let delX = mouseX - window.innerWidth / 2;
      let delY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(delY, delX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lines = ["Hi Examinar", "I Kartikey Sharma", "A Passionate Web Dev"];
    setTextLines(lines);
  }, []);

  useEffect(() => {
    if (textLines.length === 0) return;

    const interval = setInterval(() => {
      setTypedText((prevTypedText) =>
        prevTypedText.map((line, index) => {
          if (index === currentLineIndex) {
            return line.length < textLines[index].length ? line + textLines[index][line.length] : line;
          }
          return line;
        })
      );

      if (typedText[currentLineIndex] === textLines[currentLineIndex]) {
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentLineIndex, textLines, typingSpeed, typedText]);

  useEffect(() => {
    if (typedText.every((line, index) => line === textLines[index])) {
      setTimeout(() => {
        setShowFace(true);
        setTimeout(() => {
          setShowVideo(true);
        }, 500); // Delay for smoother transition
      }, 500); // Delay for smoother transition
    }
  }, [typedText, textLines]);

  return (
    <div className="w-screen h-screen bg-zinc-900 flex">
      <div className="minor w-full h-[40vw]  flex justify-around items-center relative">
        {/* Background Video */}
        <motion.div
          className="w-full h-[40vw] absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: showVideo ? 1 : 0, y: showVideo ? "0%" : "100%" }}
          transition={{ duration: 0.3, delay: 0.5 }} // Adjust as needed
        >
          <video src="bgVideo.mp4" className="w-full h-full object-cover" muted loop autoPlay />
        </motion.div>

        {/* Text displaced to the left side */}
        <div className="textStructure text-white ml-4 z-10">
          {/* Render each line separately */}
          {typedText.map((line, index) => (
            <div key={index} className="line text-8xl font-semibold font-sans">
              {line}
            </div>
          ))}
        </div>

        {/* Animated face div (conditionally rendered) */}
        {showFace && (
          <div className="relative Face bg-black w-[18vw] h-[18vw] rounded-full transition-opacity duration-500">
            <div className="absolute bg-red-700 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex rounded-full ">
              <div
                className="relative Eye1 rounded-full bg-white w-[8vw] h-[8vw]"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="Line1 absolute top-1/2 left-1/2 w-full -translate-x-[50%] -translate-y-[50%]">
                  <div className="bg-zinc-700 w-10 h-10 rounded-full"></div>
                </div>
              </div>
              <div
                className="relative Eye2 rounded-full bg-white w-[8vw] h-[8vw]"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="line2 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg w-full Line2">
                  <div className="bg-zinc-700 w-10 h-10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
