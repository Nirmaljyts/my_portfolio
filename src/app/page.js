import dynamic from "next/dynamic";

// Lazy load the components
const HeroSection = dynamic(() => import("../pages/Hero"), {
  ssr: false, // Disable server-side rendering for this component
});
const Navbar = dynamic(() => import("../pages/Navbar"), {
  ssr: false, // Disable server-side rendering for this component
});
const AboutSection = dynamic(() => import("../pages/About"), {
  ssr: false, // Disable server-side rendering for this component
});
const ProjectsSection = dynamic(() => import("../pages/Projects"), {
  ssr: false, // Disable server-side rendering for this component
});
const EmailSection = dynamic(() => import("../pages/Contact"), {
  ssr: false, // Disable server-side rendering for this component
});
const RecentProject = dynamic(() => import("../app/components/RecentProject"), {
  ssr: false, // Disable server-side rendering for this component
});
const Footer = dynamic(() => import("../pages/Footer"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen select-none">
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-0">
        <HeroSection />
        <AboutSection />
        {/* <RecentProject /> */}
        <ProjectsSection />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
