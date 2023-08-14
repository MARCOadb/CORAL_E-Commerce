import Breadcrump from "../../components/breadcrumpDesktop";
import NavBarMobile from "../../components/navBarMobile";
import useBreakpoint from "../../hooks/useBreakPoint";
import MyCart from "../MyCart";
export default function Bag() {
    const { desktop, phone } = useBreakpoint()

    return (
        <>
            {desktop ? (
                <MyCart />
            ) : (
                <>
                    <span>mobile</span>
                </>
            )}
        </>
    )
}
