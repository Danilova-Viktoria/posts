import CustomBreadcrumbs from "./CustomBreadcrumbs";
import { useLocation } from "react-router-dom";

const Header = ({ name }) => {
    const location = useLocation();

    return (
        <CustomBreadcrumbs uri={location.pathname} name={name}/>
    )
}

export default Header;