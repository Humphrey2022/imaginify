/*
 * @Author: DESKTOP-3UGGJRC\25785 2578588980@qq.com
 * @LastEditors: DESKTOP-3UGGJRC\25785 2578588980@qq.com
 * @LastEditTime: 2024-03-11 23:11:42
 * @FilePath: \imaginify\app\(root)\layout.tsx
 * @Description:
 */
import MobileNav from "@/components/shared/MobileNav";
import Siderbar from "@/components/shared/Siderbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Siderbar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
