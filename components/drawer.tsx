import { Drawer } from "flowbite-react";
import { SideBar } from "@/components/sidebar";
import { useState } from "react";

const MobileDrawer: React.FC<{ onClose: () => void, isOpened: boolean }> = ({ onClose, isOpened }) => {
    return (
        <Drawer className="w-64" open={isOpened} onClose={onClose}>
            <Drawer.Header title="MENU" titleIcon={() => <></>} />
            <Drawer.Items>
                <SideBar onClose={onClose} isMobile={true} />
            </Drawer.Items>
        </Drawer>
    );
}

export default MobileDrawer;