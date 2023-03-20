import { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState('');

    const setImage = (url) => {
        setImageUrl(url);
    };

    return (
        <ImageContext.Provider value={{ imageUrl, setImage }}>
            {children}
        </ImageContext.Provider>
    );
};