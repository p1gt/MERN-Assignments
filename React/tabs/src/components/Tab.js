import "./Tab.css";
import { useState } from "react";

const Tab = ({ items }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };
    return (
        <>
            <div className="tab-headers">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`tab-header ${index === activeTabIndex ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {items[activeTabIndex].content}
            </div>
        </>
    );
};

export default Tab;
