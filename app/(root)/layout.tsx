import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'My Companion',
  description: 'Ai Companion APP',
}

const RootLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const isPro = await checkSubscription();

  return (
    <div className="h-full">
      <NavBar isPro={isPro} />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Sidebar isPro={isPro} />
      </div>
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
  );
}

export default RootLayout;