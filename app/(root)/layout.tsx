import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loginIn = {
    firstName: "Jeon", lastName: "ByeongIl",
  };

  return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loginIn}/>
            {children}
        </main>
  );
}
