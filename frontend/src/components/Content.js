import Navbar from "./Navbar";
import Footer from "./Footer";
const Content = ({ children }) => {
    return (
        <div>
 
            <Navbar />
            {children}
            <Footer />
        </div>

    )
}
export default Content;