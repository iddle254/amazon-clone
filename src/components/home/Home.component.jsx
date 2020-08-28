import React from "react";
import "./home.styles.css";
import Product from "../Product/Product.component";

function Home() {
  const items = [
    {
      id: "ervu474",
      title: "Shop by category",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg",
    },
    {
      id: "ervu454",
      title: "AmazonBasics",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg",
    },
    {
      id: "ervu4764",
      title: "Electronics",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg",
    },
  ];
  const items2 = [
    {
      id: "23432e",
      title: "Female fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      price: 3000,
      rating: 4,
    },
    {
      id: "23432f",
      title: "Male fashion",
      image:
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      price: 3400,
      rating: 5,
    },
  ];
  const items3 = [
    {
      id: "23432e",
      title: "Bestsellers in kitchen",
      image:
        "https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      price: 3000,
      rating: 4,
    },
    {
      id: "23432f",
      title: "Toys",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 3400,
      rating: 5,
    },
    {
      id: "23430f",
      title: "Beauty and personal care",
      image:
        "https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      price: 3400,
      rating: 5,
    },
  ];
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
        alt=""
      />
      <div className="home__row">
        {items.map(({ id, title, image }) => (
          <Product key={id} title={title} image={image} />
        ))}
        {/* <Product
          id="23432"
          title="Shop by category"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
          //   price="30"
          //   rating={4}
        />
        <Product
          id="23432"
          title="the lean startup"
          image="https://content.fortune.com/wp-content/uploads/2020/05/EXC07.20.Amazon-Bezos-Illo-orange-by-BOAZ.jpg?resize=1200,600"
          price="30"
          rating={4}
        /> */}
      </div>
      <div className="home__row">
        {items2.map(({ id, title, image, price, rating }) => (
          <Product
            key={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
            id={id}
          />
        ))}
        {/* <Product
          id="23432"
          title="the lean startup"
          image="https://content.fortune.com/wp-content/uploads/2020/05/EXC07.20.Amazon-Bezos-Illo-orange-by-BOAZ.jpg?resize=1200,600"
          price="30"
          rating={4}
        />
        <Product
          id="23432"
          title="the lean startup"
          image="https://content.fortune.com/wp-content/uploads/2020/05/EXC07.20.Amazon-Bezos-Illo-orange-by-BOAZ.jpg?resize=1200,600"
          price="30"
          rating={4}
        />
        <Product
          id="23432"
          title="the lean startup"
          image="https://content.fortune.com/wp-content/uploads/2020/05/EXC07.20.Amazon-Bezos-Illo-orange-by-BOAZ.jpg?resize=1200,600"
          price="30"
          rating={4}
        /> */}
      </div>
      <div className="home__row">
        {items3.map(({ id, title, image, price, rating }) => (
          <Product
            key={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
            id={id}
          />
        ))}
        {/* <Product
          id="23432"
          title="the lean startup"
          image="https://content.fortune.com/wp-content/uploads/2020/05/EXC07.20.Amazon-Bezos-Illo-orange-by-BOAZ.jpg?resize=1200,600"
          price="30"
          rating={4}
        /> */}
      </div>
    </div>
  );
}

export default Home;
