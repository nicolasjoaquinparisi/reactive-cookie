import { createContext, useState } from 'react';

export const CookieContext = createContext();

const CookieProvider = (props) => {

  const [cookies, updateCookies] = useState(0);
  const [cookiesPerClick, updateCookiesPerClick] = useState(1);

    return ( 
        <CookieContext.Provider
            value={{
                cookies,
                updateCookies,
                cookiesPerClick,
                updateCookiesPerClick
            }}
        >
            {props.children}
        </CookieContext.Provider>
    );
}
 
export default CookieProvider;