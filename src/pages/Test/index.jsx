import { useContext, useEffect, useState } from "react";
import ArrowSvg from "../../assets/icon/ArrowSvg";
import CrossSvg from "../../assets/icon/CrossSvg";
import BottomModal from "../../components/bottomModal";
import Header from "../../components/header";
import MobileLayout from "../../layouts/mobileLayout";
import { addBagProduct } from "../../services/addBagProduct";
import { deleteBagProduct } from "../../services/deleteBagProduct";
import IconBtn from "../../components/iconBtn";
import WishlistSvg from "../../assets/icon/WishlistSvg";
import Product from "../../components/product";
import getAllProducts from "../../services/getAllProducts";
import DefaultBtn from "../../components/defaultBtn";
import { setWishlistProduct } from "../../services/setWishlistProduct";
import { AuthContext } from "../../contexts/AuthContext";
import { storage } from "../../services/firebaseConnection";
import { ref, getBytes, listAll, child, getDownloadURL } from "firebase/storage";

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [photos, setPhotos] = useState(null)

  const [img, setImg] = useState()

  const storageRef = ref(storage, 'productsImg')

  //const folderRef = storageRef.child('productsImg/')

  const productImgList = []

  const getImages = async () => {
    // const photos = await getBytes(storageRef)
    // return photos
    await getDownloadURL(storageRef)
      .then((x) => {
        productImgList.push(x)
      });
    console.log(productImgList)
  }

  // const getProducts = async () => {
  //   const produtos = await getAllProducts();
  //   return produtos;
  // };

  useEffect(() => {
    // getProducts()
    //   .then((data) => setProducts(data))
    getImages()
      .then((data) => setPhotos(data))
  }, []);

  return (
    <>
      <span>oi</span>
      <img src={img} />
      {console.log(photos)}
    </>
  );
};
export default Test;
