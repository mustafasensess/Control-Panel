import React, { useMemo } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import './StatusCard.css';
import { useServices } from "../contexts/ServiceContext.jsx";
import { useDates } from "../contexts/DateContext.jsx"; // 1. DateContext'i ekle

const StatusCard = () => {
    const { rows } = useServices();
    const { selectedDateIndex } = useDates();


    const currentStatus = useMemo(() => {
        if (!rows || rows.length === 0) {
            return {
                type: 'success',
                title: 'Veri Yükleniyor...',
                description: 'Sistem durumu kontrol ediliyor.'
            };
        }

        const dailyStatuses = rows.map(service => service.history[selectedDateIndex]);

        if (dailyStatuses.includes('DOWN')) {
            return {
                type: 'error',
                title: 'Hizmet Kesintisi',
                description: 'Bazı sistemlerde kesinti yaşanıyor.'
            };
        }

        if (dailyStatuses.includes('WARNING')) {
            return {
                type: 'warning',
                title: 'Performans Sorunu',
                description: 'Bazı hizmetlerde yavaşlama tespit edildi.'
            };
        }

        return {
            type: 'success',
            title: 'Tüm Sistemler Aktif',
            description: 'Sistemlerimizi etkileyen bir sorun bulunmamaktadır.'
        };
    }, [rows, selectedDateIndex]);

    const getIcon = () => {
        switch (currentStatus.type) {
            case 'error': return <CancelIcon sx={{ color: '#fff', fontSize: 24 }} />;
            case 'warning': return <ErrorIcon sx={{ color: '#fff', fontSize: 24 }} />;
            default: return <CheckCircleIcon sx={{ color: '#fff', fontSize: 24 }} />;
        }
    };

    return (
        <div className={`status-card ${currentStatus.type}`}>
            <div className="status-header">
                {getIcon()}
                <h3>{currentStatus.title}</h3>
            </div>
            <div className="status-body">
                <p>{currentStatus.description}</p>
            </div>
        </div>
    );
};

export default StatusCard;