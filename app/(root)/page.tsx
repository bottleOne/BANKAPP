import React from "react";
import HeaderBox from "@/components/HeaderBox";
const Home = () => {

    const loginIn = {
        firstName: "Jeon",
    };

    return (
        <section className="home">
            <div className="home-conent">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome to the Home Page"
                    user={loginIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and
                    transactions efficiently."
                    />
                </header>
            </div>
        </section>
    );
};

export default Home;    