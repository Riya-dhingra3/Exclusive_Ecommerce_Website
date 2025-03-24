import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

interface CardProps {
    name: string;
    price: number;
    originalPrice: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
}

const Card: React.FC<CardProps> = ({
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    image
}) => {
    const [showAddToCart, setShowAddToCart] = useState(false);

    return (
        <div className="w-full max-w-[270px]">
            {/* Product Image Container */}
            <div className="relative bg-[#F5F5F5] rounded-lg p-8 mb-4 overflow-hidden">
                {/* Discount Badge */}
                {discount !== undefined && discount > 0 && (
                    <div className="absolute top-3 left-3 bg-[#DB4444] text-white px-3 py-1 rounded z-10">
                        -{discount}%
                    </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 ">
                    <button className="bg-white p-2 rounded-full hover:bg-gray-100">
                        <AiOutlineHeart className="w-5 h-5" />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-gray-100">
                        <AiOutlineEye className="w-5 h-5" />
                    </button>
                </div>

                {/* Product Image with Click Handler */}
                <div className="relative cursor-pointer" onMouseEnter={()=>setShowAddToCart(true)} onMouseLeave={()=>setShowAddToCart(false)}>
                    <img
                        src={image}
                        alt="Product"
                        className="w-full h-[200px] object-contain"
                    />
                    {showAddToCart && (
                        <div className="absolute bottom-[-2rem] left-[-2rem] right-[-2rem] z-20">
                            <button className="w-full bg-black text-white p-1 text-[16px] font-medium">
                                Add To Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Product Details */}
            <div className="space-y-2">
                <h3 className="font-medium text-lg">{name}</h3>
                <div className="flex gap-3">
                    <span className="text-[#DB4444] font-medium">${price}</span>
                    <span className="text-gray-500 line-through">${originalPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={`w-4 h-4 ${index < 5
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-gray-500">({reviews})</span>
                </div>
            </div>
        </div>
    );
};

export default Card;