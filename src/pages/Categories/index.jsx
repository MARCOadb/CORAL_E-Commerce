import Breadcrump from "../../components/breadcrumpDesktop";
import NavBarMobile from "../../components/navBarMobile";
export default function Category() {
    return (
        <>
        <h1>Página category</h1>
        <Breadcrump idCategory={2} idProduct={2}/>
        <NavBarMobile />
        </>
    )
}