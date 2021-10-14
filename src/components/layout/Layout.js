import HeaderComponents from "./Header";
import FooterComponents from "./Footer";

function Layout({children}) {
    return (
      <div className="App">
          <HeaderComponents />
           <main className="just_for_tou_area1"> {children} </main>
           <FooterComponents />
      </div>
    );
  }
  
  export default Layout;
