export interface ContactAdvisor {
    name: string;
    phone: string;
}

export const contactAdvisors: ContactAdvisor[] = [
    {
        name: "Betzabe",
        phone: "+5493816132242",
    },
    {
        name: "Tesi",
        phone: "+5493816050625",
    },
    {
        name: "Alejandra",
        phone: "+5493816266870",
    },
    {
        name: "Leandro",
        phone: "+5493815342171",
    },
];

export function getRandomContactAdvisor(): ContactAdvisor {
    return contactAdvisors[
        Math.floor(Math.random() * contactAdvisors.length)
    ];
}

export function buildWhatsAppUrl(phone: string, message: string): string {
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}
