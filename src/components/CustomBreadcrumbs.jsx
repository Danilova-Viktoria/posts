import { Breadcrumbs, Link, Typography } from "@mui/material";
import PageNames from "../constants/pageNames";

const CustomBreadcrumbs = ({ uri }) => {

    const path = uri.split('/')
    
    const items = path.map((segment, index) => {
        const text = PageNames[segment];
        if (index < path.length - 1) {
            return (
                <Link key={segment} underline="hover" color="inherit" href="/">
                    {text}
                </Link>
            )
        }

        return (
            <Typography key={segment} color="text.primary">{text}</Typography>
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