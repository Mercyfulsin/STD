import TopNavigation from "../TopNavigation";
import Footer from "../Footer";
import SideBar from "../SideBar";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <TopNavigation />
      <>{children}</>
    </div>
  );
}
