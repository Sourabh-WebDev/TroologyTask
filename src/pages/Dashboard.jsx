import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import DashTabs from '../components/DashTabs'
import MainTable from '../components/MainTable';


const Dashboard = () => {


    const tabs = [
        {
            label: 'Daily Field Report',
            content: <div>designer not available</div>,
        },
        {
            label: 'Billing',
            content: <div>designer not available</div>,
        },
        {
            label: 'Invoicing',
            content: <div>designer not available</div>,
        },
        {
            label: 'Schedule of Value',
            content: <div>designer not available</div>,
        },
        {
            label: 'Payment Received Log',
            content: <MainTable />,
        },
    ];

    return (
        <DashboardLayout>
            {/* Content goes here */}
            <div className='shadow-lg hover:shadow-xl transition duration-300 h-[80vh] bg-white py-3 px-4 overflow-y-auto'>
                <DashTabs tabs={tabs} />
            </div>
        </DashboardLayout>
    )
}

export default Dashboard

