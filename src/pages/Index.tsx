import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import AcademicOffering from "@/components/AcademicOffering";
import Services from "@/components/Services";
import NewsEvents from "@/components/NewsEvents";
import Testimonials from "@/components/Testimonials";
import MapContact from "@/components/MapContact";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";

const Index = () => {
    return (
        <div className="min-h-screen">
            {/* <Header /> */}
            <Navbar1 />
            <main>
                <HeroPageComponent 
                    title="UNIVERSIDAD DE SAN PABLO T" 
                    description="Una universidad distinta, como vos. Formamos profesionales íntegros, comprometidos con la excelencia académica y el desarrollo social" 
                    imageUrl="/images/IMG_4688.webp" 
                    minHeight="520px" 
                    btn={true}
                />

                {/* <MissionVision /> */}
                <AcademicOffering />

                <Services />

                <NewsEvents />

                {/* Revistas Universitarias */}
                <section className="py-20 bg-muted/20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-semibold font-heading text-primary mb-6">
                            Revistas Universitarias
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
                            Explorá nuestras publicaciones académicas y de investigación.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Placeholder cards */}
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-muted2 hover:shadow-md transition-shadow">
                                    <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            Revista {item}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Edición #{item}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">Investigación y desarrollo académico de nuestra universidad.</p>
                                    <a href="#" className="text-primary hover:underline font-medium text-sm">Leer Revista →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonials />

                <MapContact />

                <FAQ />

                {/* <FinalCTA /> */}
            </main>
            <Footer />
        </div>
    );
};

export default Index;
