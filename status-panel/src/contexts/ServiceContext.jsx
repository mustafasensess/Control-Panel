import {createContext, useContext, useEffect, useState} from "react";

const ServiceContext = createContext();

const calculateGlobalStatus = (data) => {
    const todaysStatus = data.map(service => service.history[service.history.length - 1]);

    if (todaysStatus.includes('DOWN')) {
        return { type: 'error', title: 'Service Outage', description: 'We are experiencing issues with some of our services.' };
    }
    if (todaysStatus.includes('WARNING')) {
        return { type: 'warning', title: 'Service Disruption', description: 'Some services are experiencing degraded performance.' };
    }
    return { type: 'success', title: 'We’re fully operational', description: 'We’re not aware of any issues affecting our systems.' };
};
function ServiceProvider({children}) {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalStatus, setGlobalStatus] = useState(null);



    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/services');
                const data = await response.json();

                setRows(data);
                setGlobalStatus(calculateGlobalStatus(data));
            } catch (error) {
                console.error("Veri hatası", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <ServiceContext.Provider value={{rows, loading, globalStatus}}>
            {children}
        </ServiceContext.Provider>
    )
}
function useServices(){
    const context = useContext(ServiceContext);
    if(context === undefined)
        throw new Error("Used outside of the provider");
    return context;
}

export {ServiceProvider, useServices};
