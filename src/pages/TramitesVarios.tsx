import ServiceTypePaymentTemplate from "@/components/payments/ServiceTypePaymentTemplate";

const TramitesVarios = () => {
    return (
        <ServiceTypePaymentTemplate
            typeSlug="tramite"
            heroTitle="Trámites Varios"
            heroDescription="Gestioná el pago de certificados, legalizaciones y otros trámites administrativos"
            formTitle="Realizar Pago de Trámite"
        />
    );
};

export default TramitesVarios;
