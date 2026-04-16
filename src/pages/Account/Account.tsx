import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const AccountPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Mock data - This should come from your backend or Lemon Squeezy integration
    const subscription = {
        planName: "Pro Plan",
        status: "Active",
        billingCycle: "Monthly",
        nextPaymentDate: "April 15, 2026",
        customerPortalUrl: "https://app.lemonsqueezy.com/my-orders" // Link to Lemon Squeezy portal
    };

    useEffect(() => {
        const tl = gsap.timeline();
        gsap.set(contentRef.current, { y: 20, opacity: 0 });

        tl.to(contentRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col pt-32 px-6 lg:px-12">
            {/* Background grain (matching home) */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.015] pointer-events-none select-none z-0">
                <h2 className="text-[25vw] font-black leading-none tracking-tighter uppercase text-black">
                    Billing
                </h2>
            </div>

            {/* Content */}
            <div ref={contentRef} className="z-10 w-full max-w-[1000px] mx-auto flex flex-col items-start gap-12">

                {/* Header Section */}
                <div className="flex flex-col items-start gap-4">
                    <Link
                        to="/"
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors mb-4 flex items-center gap-2"
                    >
                        <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-[0.8]">
                        Account <br /> Settings
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-12">
                    {/* Subscription Card */}
                    <div className="p-10 bg-black/5 border border-black/5 flex flex-col gap-8 group">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Current Plan</p>
                            <h2 className="text-3xl font-black uppercase tracking-tight">{subscription.planName}</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center py-4 border-b border-black/10">
                                <span className="text-sm font-semibold text-black/50">Status</span>
                                <span className="text-sm font-black uppercase tracking-wider text-green-600">{subscription.status}</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-black/10">
                                <span className="text-sm font-semibold text-black/50">Cycle</span>
                                <span className="text-sm font-black uppercase tracking-wider">{subscription.billingCycle}</span>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <span className="text-sm font-semibold text-black/50">Next Invoice</span>
                                <span className="text-sm font-black uppercase tracking-wider">{subscription.nextPaymentDate}</span>
                            </div>
                        </div>

                        <a
                            href={subscription.customerPortalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 px-8 py-5 bg-black text-white text-xs font-black uppercase tracking-[0.2em] text-center hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 block"
                        >
                            Manage on Lemon Squeezy
                        </a>
                    </div>

                    {/* Info & Support Card */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-black uppercase tracking-tight">Need to cancel?</h3>
                            <p className="text-sm text-black/60 leading-relaxed font-medium">
                                You can manage or cancel your subscription at any time using our billing portal.
                                Click the button on the left to securely redirect to Lemon Squeezy.
                                You will continue to have access to your plan until the end of your current billing period.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-black uppercase tracking-tight">Billing FAQ</h3>
                            <div className="flex flex-col gap-4">
                                <details className="group cursor-pointer">
                                    <summary className="text-xs font-black uppercase tracking-widest text-black/40 list-none group-open:text-black transition-colors mb-2">Can I get a refund?</summary>
                                    <p className="text-xs text-black/60 pl-2 border-l-2 border-black/10">We follow Lemon Squeezy's standard refund policy. Contact support for specific cases.</p>
                                </details>
                                <details className="group cursor-pointer">
                                    <summary className="text-xs font-black uppercase tracking-widest text-black/40 list-none group-open:text-black transition-colors mb-2">How to update card?</summary>
                                    <p className="text-xs text-black/60 pl-2 border-l-2 border-black/10">Go to the Customer Portal and click on 'Update Payment Method'.</p>
                                </details>
                            </div>
                        </div>

                        <div className="mt-auto opacity-20">
                            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Payments secured by Lemon Squeezy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
