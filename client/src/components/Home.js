import { Notes } from './Notes'

export default function Home(props) {
    const {setprogress,showAlert,alert}=props;
    props.setprogress(0)
    return (
        <div>
            <Notes setprogress={setprogress} showAlert={showAlert} alert={alert}/>
            </div>
            )
}
