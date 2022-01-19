import React, { useState } from "react";
const withLogin = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const onLogin = () => {
        localStorage.setItem("user", "user");
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    return (
        <>
            <Component
                {...props}
                onLogOut={onLogOut}
                onLogin={onLogin}
                isAuth={isAuth}
            />
        </>
    );
};

export default withLogin;
