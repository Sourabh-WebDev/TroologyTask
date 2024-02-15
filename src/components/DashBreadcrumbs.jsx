import { Breadcrumbs } from "@material-tailwind/react";

const DashBreadcrumbs = ({ firstHeading, secondHeading, ThirdHeading }) => {
    return (
        <Breadcrumbs fullWidth className="bg-transparent" separator=">">
            <a href="#" className="opacity-60">
                {firstHeading}
            </a>
            <a href="#" className="opacity-60">
                {secondHeading}
            </a>
            <a className="text-[#256EB5]" href="#">{ThirdHeading}</a>
        </Breadcrumbs>
    )
}

export default DashBreadcrumbs