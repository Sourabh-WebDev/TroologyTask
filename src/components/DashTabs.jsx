import React, { useState } from 'react';

const DashTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(4);

    return (
        <div className="flex flex-col">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 ${activeTab === index
                            ? 'text-[#256EB5] font-semibold'
                            : ' text-[#292A2B] font-normal'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">{tabs[activeTab].content}</div>
        </div>
    );
};

export default DashTabs;
