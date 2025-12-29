import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
function IconTypes() {
    return (
        <div style={{display: 'flex',
            marginBottom:"20px",
            alignItems: 'center',
            gap: '10px',
            color: 'black',
            fontSize: '14px',
        }}>


            <CheckCircleIcon sx={{fontSize: 18, color: '#75FB4C'}}/>
            <span>Kullanılabilir</span>

            <InfoIcon sx={{fontSize: 18, color: '#2196f3' }} />
            <span>Hizmet bilgileri</span>

            <ErrorIcon sx={{fontSize: 18, color: '#fbbc04'}}/>
            <span>Hizmet Arızası</span>

            <CancelIcon sx={{fontSize: 18, color: '#d93025'}}/>
            <span>Hizmet kesintisi</span>

        </div>
    )
}

export default IconTypes;
