import RoomIcon from '@mui/icons-material/Room';
import BusinessIcon from '@mui/icons-material/Business';
import BasicTabs from './JobListing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Show from './show';
import { useParams } from 'react-router-dom';
import MainData from './JsonServer.json'

const Entomologist = () => {
    let { id } = useParams();


    const resp = MainData.rolesData.find(ele => ele.id == id)
    return (
        <Show data={resp} />
    )
}
export default Entomologist