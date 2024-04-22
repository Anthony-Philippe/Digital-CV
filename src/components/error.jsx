import { Link } from 'react-router-dom'
import illustration from '../assets/animated/404-error.svg'

import '../sass/components/error.scss'
import { useEffect } from 'react'

function Error() {
    const goBack = () => {
        window.history.pushState(null, '', '/')
        window.history.back()
    }

    useEffect(() => {
       goBack()
    })


    return (
        <>
            <div className="error">
                <div className="container">
                    <img src={illustration} alt="404" />
                </div>
            </div>
        </>
    )
}

export default Error