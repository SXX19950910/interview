import ComputeRect from "../ComputeRect";
import LifeCycle from "../LifeCycle";
import UseMemo from '../UseMemo'

export default function Solutions(props) {

    return (
        <div>
            {
                props.name === 'computeRect' && <ComputeRect />
            }
            {
                props.name === 'lifeCycle' && <LifeCycle />
            }
            {
                props.name === 'useMemo' && <UseMemo />
            }
        </div>
    )
}