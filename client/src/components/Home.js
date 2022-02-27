import { Notes } from './Notes'

export default function Home(props) {
    const {setprogress}=props;
    props.setprogress(0)
    return (
        <div>
            <Notes setprogress={setprogress} showAlert={props.showAlert} />
            </div>
            )
}
