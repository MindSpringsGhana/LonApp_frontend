import { Link } from 'react-router-dom'
import "../../styles/buttons.scss"

const OutlineButton = (props) => {
    const { label, action, page, className } = props


    return (
        <>
            <div className={`outline-btn ${className}`} onClick={action}>
                <div>
                    <p>{label}</p>
                </div>
            </div>
        </>
    )

    if (page) return (
        <>
            <>
                <Link to={page} className="outline-btn">
                    <div className='align-content'>
                    {/* <img src={infoIcon} alt="Info Icon"></img> */}
                        <p> {label}</p>
                    </div>
                </Link>
            </>
        </>
    )

    return <></>
}

export default OutlineButton