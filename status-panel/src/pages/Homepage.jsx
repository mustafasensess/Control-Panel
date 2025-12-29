import Main from "../components/Main.jsx";
import StatusBox from "../components/StatusBox.jsx";
import SideStatsBox from "../components/SideStatsBox.jsx";
import { Box, Container } from "@mui/material";

function Homepage() {
    return (
        <div className="app">
            <Main>
                <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 3,
                        alignItems: 'flex-start'
                    }}>
                        <Box sx={{
                            flex: 1,
                            minWidth: 0
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {/*<SearchHeader/>*/}
                                <StatusBox/>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: '280px',
                            flexShrink: 0,
                            display: {
                                xs: 'none',
                                md: 'none',
                                lg: 'block'
                            }
                        }}>
                            <SideStatsBox/>
                        </Box>
                    </Box>
                </Container>
            </Main>
        </div>
    );
}

export default Homepage;