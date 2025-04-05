import React from 'react';
interface CategoryProps {
    name: string;
    image: React.ReactNode;
}

const Category= ({name, image}: CategoryProps) => {
  return (
    <div className="flex justify-between">
            {/* Product Image Container */}
            <div className='w-[100%] h-[100%] border-[1px] border-gray-300 rounded-md relative cursor-pointer flex  flex-col gap-2 p-[10%]'>
                {/* Product Image with Click Handler */}
                   <div className='flex items-center justify-center'>{image}</div>
                   <div className='flex items-center justify-center'>
                    {name}
                    </div> 
                </div>
            </div>
  );
};

export default Category;
