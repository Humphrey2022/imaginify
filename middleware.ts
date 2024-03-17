/*
 * @Author: DESKTOP-3UGGJRC\25785 2578588980@qq.com
 * @LastEditors: DESKTOP-3UGGJRC\25785 2578588980@qq.com
 * @LastEditTime: 2024-03-11 21:47:53
 * @FilePath: \imaginify\public\middleware.ts
 * @Description:
 */
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
