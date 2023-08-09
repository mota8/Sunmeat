import Navbar from "./Navbar";
import Footer from "./Footer";
const Content = ({ children }) => {
    // window.scrollTo(0,0)
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>

    )
}
export default Content;