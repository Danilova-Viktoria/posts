import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import PageNames from "../constants/pageNames";

const CustomBreadcrumbs = ({ uri, name }) => {

    const path = uri.split('/')
    
    const items = path.map((segment, index) => {
        const text = PageNames[segment];
        const to = path.slice(0, index + 1).join('/');

        if (index < path.length - 1) {
            return (
                <Link key={segment} style={{ textDecoration: "none",color: "inherit" }} to={to}>
                    {text}
                </Link>
            )
        }

        return (
            <Typography key={segment} color="text.primary">{name || text}</Typography>
        )
    });

    return (
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            {items}
          </Breadcrumbs>
        </div>
      );
}

export default CustomBreadcrumbs;