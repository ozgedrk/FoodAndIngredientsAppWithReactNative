import { createContext, useState } from "react";


export const FavouritesContext = createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite: (id)=>{}
})

function FavouritesContextProvider({children}) {

    const [favouriteFoodIds, setFavouriteFoodIds] = useState([])

    function addFavourite(id){
        setFavouriteFoodIds((current)=>[...current,id])
    }
    
    function removeFavourite(id){
        setFavouriteFoodIds((current)=>current.filter((foodId) => foodId !== id ))
    }

    const value = {
        ids:favouriteFoodIds,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite,
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}   

export default FavouritesContextProvider;