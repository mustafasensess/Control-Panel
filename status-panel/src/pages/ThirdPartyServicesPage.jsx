import ServiceTable from "../components/ServiceTable.jsx";
import {Container} from "@mui/material";
import StatusCard from "../components/StatusCard.jsx";
import IconTypes from "../components/IconTypes.jsx";
import Header from "../components/Header.jsx";


function ThirdPartyServicesPage() {
    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Header title="3. Parti Hizmetleri"/>
            <StatusCard/>
            <IconTypes/>
            <ServiceTable/>
        </Container>
    )
}

export default ThirdPartyServicesPage;
