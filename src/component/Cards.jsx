import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BubbleGame from './Bubble';

function Cards() {
  const [component, setComponent] = useState(null);

  const handleProject1Click = async () => {
    try {
      // Simulated JSON response for Project 1
      const data = {
        componentName: 'BubbleGame' // Assuming this is the name of the component file
      };

      // Dynamically import the component
      const dynamicComponent = await import(`./${BubbleGame}`);

      // Set the component to state
      setComponent(dynamicComponent.default);
    } catch (error) {
      console.error('Error fetching component:', error);
    }
  };

  return (
    <div className='w-screen h-[30vw] bg-white flex justify-between gap-2 p-10'>
      {/* Link for Project 1 */}
      <Link to="/bubble_game" onClick={handleProject1Click} className='bg-slate-600 w-1/2 rounded-lg flex justify-center items-center'>
        <h2 className='-translate-x-[50%] -translate-y-[50%]'>Project 1</h2>
      </Link>
      {/* Link for Project 2 */}
      <Link to="/insta_like" target="_blank" className='bg-slate-600 w-1/2 rounded-lg flex justify-center items-center'>
        <h2 className='-translate-x-[50%] -translate-y-[50%]'>Project 2</h2>
      </Link>
      {/* Render the fetched component */}
      {component && <component />}
    </div>
  );
}

export default Cards;
