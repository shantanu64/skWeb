import RoomIcon from '@mui/icons-material/Room';
import BusinessIcon from '@mui/icons-material/Business';
import BasicTabs from './JobListing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useParams } from 'react-router-dom';
import MainData from './JsonServer.json'
import Show from './show';



const BusinessAnalyst = () => {

    let { id } = useParams();


    const resp = MainData.rolesData.find(ele => ele.id == id)
    return (
        <Show data={resp} />

    )
}
export default BusinessAnalyst