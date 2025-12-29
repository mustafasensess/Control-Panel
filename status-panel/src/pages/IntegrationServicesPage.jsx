import ServiceTable from "../components/ServiceTable.jsx";
import {Container} from "@mui/material";
import StatusCard from "../components/StatusCard.jsx";
import IconTypes from "../components/IconTypes.jsx";
import Header from "../components/Header.jsx";


function IntegrationServicesPage() {
    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Header title="Entegrasyon Hizmetleri"/>
            <StatusCard/>
            <IconTypes/>
            <ServiceTable/>
        </Container>
    )
}

export default IntegrationServicesPage;
