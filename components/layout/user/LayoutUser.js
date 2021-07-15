//@ts-check
import Header from './Header'
import Footer from './Footer'
const LayoutUser = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default LayoutUser;