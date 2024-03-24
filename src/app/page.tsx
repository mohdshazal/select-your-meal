import Image from "next/image";
import MainHeader from "./components/MainHeader";
import MainCard from "./components/MainCard";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <>
    <MainHeader/>
    <div className="flex justify-around bg-[#F6F9F9]">
    <MainCard/>
    <Cart/>
    </div>
    <Footer/>
    {/* <Modal/> */}
    </>
  );
}
