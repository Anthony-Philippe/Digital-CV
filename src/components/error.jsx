import illustration from '../assets/animated/404-error.svg'

import Navbar from '../layouts/navbar/'

import '../sass/components/error.scss'

function Error() {
    return (
        <>
            <Navbar />
            <div className="error">
                <div className="container">
                    <img src={illustration} alt="404"/>
                </div>
            </div>
        </>
    )
}
 
export default Error