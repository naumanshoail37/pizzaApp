import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to='/Menu'>
      <button className='ml-[-250px] mt-5 text-white font-bold text-[14px] font-serif bg-gray-700 rounded-xl h-[40px] w-[120px]'>
        Order Now
      </button>
    </Link>
  );
};

export default Button;
