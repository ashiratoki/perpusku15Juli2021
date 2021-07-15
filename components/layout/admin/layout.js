//@ts-check
import Side from './side'
import Header from './header'
import Footer from './footer'
import ImportScript from './importScript'

const LayoutAdmin = ({children}) => {
    return (
        <div >
            <div id="wrapper">
                <Side />
                <div className="d-flex flex-column" id="content-wrapper" >
                <Header/>
                {children}
                </div>
            </div>    
            <Footer/>
            <ImportScript/>    
        </div>
    )
}
export default LayoutAdmin;