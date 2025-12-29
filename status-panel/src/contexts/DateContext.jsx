import { createContext, useContext, useState } from "react";

const DateContext = createContext();

function DateProvider({children}) {

    const [dateColumns] = useState(() => {
        const dates = [];
        const today = new Date();


        for (let i = 7; i >= 0; i--) {
            const pastDate = new Date(today);
            pastDate.setDate(today.getDate() - i);
            dates.push(new Intl.DateTimeFormat('tr-TR', {day: 'numeric', month: 'short'}).format(pastDate));
        }
        return dates;
    });

    const [selectedDateIndex, setSelectedDateIndex] = useState(dateColumns.length - 1);

    return (
        <DateContext.Provider value={{dateColumns, selectedDateIndex, setSelectedDateIndex}}>
            {children}
        </DateContext.Provider>
    )
}

function useDates() {
    const context = useContext(DateContext);
    if (context === undefined) throw new Error("Used outside of the provider");
    return context;
}

export { DateProvider, useDates };