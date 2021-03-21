import './Products.scss';
import Product from "../../components/Product/Product";

let phones = [
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "iPhone-12",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  },
  {
    title: "Xiomi MI 10",
    price: "$1000",
    description: "dsoighs wegnjs sg ej loremhsdohsd sdfhds sdf sfsf his  sdifsd hsdif hsd hfisdh sdihf sidfhi shsdhfsdifhsdiuhiu hsdi f ds fsdiu  sdihifh iushdfiu  hiudsfh hdh hhi i i i i i i i ",
    imgSrc: "https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg"
  }
]

let phoneItems = phones.map((phone, index) => {
  return <Product product={phone} key={index} />
})

function Products() {
  return (
    <div className="Products">
        <h1>Це сторінка продуктів</h1>
        <div className="products-container">
            {phoneItems}
          </div>
    </div>
  );
}

export default Products;