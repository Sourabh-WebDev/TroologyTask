import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DashBreadcrumbs from './DashBreadcrumbs';

const DashboardLayout = ({ children }) => {
    const [firstColWidth, setFirstColWidth] = useState(false);

    const handleOpen = () => {
        setFirstColWidth(!firstColWidth);
    };
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className={`${firstColWidth ? 'w-[100px]' : 'w-[200px]'}`}>
                {/* Sidebar content goes here */}
                <SideBar firstColWidth={firstColWidth} arrow={handleOpen} />
            </aside>

            {/* Main content area */}
            <main className="w-full p-4">
                {/* Header */}
                <header className="mb-4">
                    <Header />
                </header>
                <div className="flex items-center">
                    <FaChevronLeft /><DashBreadcrumbs firstHeading={'Project'} secondHeading={'Liberty Park Estate'} ThirdHeading={'Progress, Billing & Invoicing'} />
                </div>
                {/* Main content */}
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
