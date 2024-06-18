import SideNavBar from '../_components/SideNavBar';

const sideBarLinks = [
    {
        label: "Monitor",
        href: "dashboard/monitor"
    },
    {
        label: "Devices",
        href: "dashboard/devices"
    },
    {
        label: "Settings",
        href: "dashboard/settings"
    }
]


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNavBar sideBarLinks={sideBarLinks}/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}