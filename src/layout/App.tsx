import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Content } from "./Content";

export const Application = () => {
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}
