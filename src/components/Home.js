import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Products from './Products';
import axios from 'axios';

function Home() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		axios.get('./products.json').then((res) => setProduct(res.data.products));
	}, []);

	const allProducts = product.map(({ id, name, price, image, rate }) => (
		<Products
			key={Math.random()}
			id={id}
			name={name}
			price={price}
			image={image}
			rate={rate}
		/>
	));
	return (
		<main className='home'>
			<figure className='hero'>
				<img
					className='hero__img'
					src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'
					alt='hero'
				/>
			</figure>
			<section className='products'>{allProducts}</section>
		</main>
	);
}

export default Home;
