import { Routes, Route } from "react-router-dom";
import Beauty from "../Pages/Beauty";
import Home from "../Pages/Home";
import Kids from "../Pages/Kids";
import Men from "../Pages/Men";
import ShopAndBags from "../Pages/ShopAndBags";
import Women from "../Pages/Women";

const AllRoutes=()=>{
    return <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/shopandbags" element={<ShopAndBags/>} />
        <Route path="/beauty" element={<Beauty/>} />
    </Routes>
    </>
}
export default AllRoutes