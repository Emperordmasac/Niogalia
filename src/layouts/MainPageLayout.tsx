import React from "react";

//--INTERNAL IMPORTS
import NavBar from "@/src/components/navigation/NavBar";

//--TYPE DEFINITIONS
type Props = {
    children?: JSX.Element | JSX.Element[];
};

const MainPageLayout = ({ children }: Props) => {
    return (
        <div>
            <div className="sticky">
                <NavBar />
            </div>
            <div style={{ paddingTop: "5rem" }}>{children}</div>
        </div>
    );
};

export default MainPageLayout;
