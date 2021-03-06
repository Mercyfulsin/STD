import { BsGearFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { SiTwilio } from 'react-icons/si';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<SiTwilio size="28" />} link="/" />
        <Divider />
        <SideBarIcon icon={<FaPhone size="20" />} text="Voice" />
        <SideBarIcon icon={<TiMessages size="20" />} text="SMS" link="/posts/sms-page" />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings" link="/posts/settings" />
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }) => (
  (!link ? link = "" : null),
  <Link href={link}>
  <div className="sidebar-icon group">
    {icon}
    { text && <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>}
  </div>
  </Link>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;