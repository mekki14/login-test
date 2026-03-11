import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex font-cairo min-h-screen relative overflow-hidden bg-zinc-50 dark:bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] start-[-10%] h-[500px] w-[500px] rounded-full bg-sky-300/40 blur-[100px] dark:bg-sky-800/30" />

            <div className="flex flex-1 flex-col justify-center relative z-10 px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="mb-8 flex justify-center">
                        <Image src="/logoo.png" alt="NexCloud Logo" width={60} height={60} className="rounded-lg object-contain" />
                    </div>
                    {children}
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block p-4">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                        src="/login-bg.avif"
                        alt="Background Abstract"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40" />
                    <div className="absolute bottom-12 start-12 end-12 text-zinc-50">
                        <h2 className="text-3xl font-bold tracking-tight">نكس كلاود</h2>
                        <p className="mt-4 text-lg">
                            المنصة الأفضل لإدارة مشاريعك السحابية بكفاءة وأمان عالي.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
