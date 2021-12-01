import React from 'react';
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text }) => {
  return (
    <button
      disabled={disabled}
      type='submit'
      className='max-w-lg bg-yellow-500 text-white font-bold text-2xl p-2 rounded-xl hover:bg-yellow-600  shadow-md my-2 disabled:opacity-50 disabled:bg-gray-700'
    >
      {/* className='bg-yellow-500 hover:bg-yellow-600 p-2 max-w-lg border-none text-white rounded-lg h-auto my-8 cursor-pointer text-2xl' */}
      {loading ? <ReactLoading type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonLoading;