import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./headers";

interface Props {
    children?: ReactNode
}

export const Layout = ({children, ...props}: Props) => {
    return(
    <>
        <Header/>
        <main{...props}>{children}</main>
        <Footer/>
    </>
    )
}