import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalancebox";

const Home = () => {

    const loginIn = {
        firstName: "Jeon",
    };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome to the Home Page"
                        user={loginIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and
                        transactions efficiently."
                    />
                

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250}
                />
                </header>
            </div>
        </section>
    );
};

export default Home;    