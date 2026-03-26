import { Target, Eye, Users } from "lucide-react";
import { UniversityButton } from "./ui/university-button";

const MissionVision = () => {
  const items = [
    {
      icon: Target,
      title: "Misión",
      description: "Formar profesionales íntegros y competentes, comprometidos con la transformación social y el desarrollo sostenible de nuestra región."
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser reconocidos como una universidad de excelencia académica, líder en innovación educativa y desarrollo regional."
    },
    {
      icon: Users,
      title: "Objetivos",
      description: "Desarrollar programas académicos de calidad, fomentar la investigación y promover valores éticos en nuestra comunidad educativa."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <div 
              key={item.title}
              className={`text-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary font-heading">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <UniversityButton variant="tertiary" size="lg" className="text-lg">
            Conocé más sobre la USPT →
          </UniversityButton>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;