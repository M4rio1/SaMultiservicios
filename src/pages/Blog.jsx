import { React, useState } from "react";
import { ArticleList, ButtonList } from "../components";
import "./Blog.css";
import data from "../Data/Data";

function Blog(){

    const allCategories = [
		'All',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

    return(
        <>
        <div className="bg-banner mb-12">
        <div class="overlay bg-black/60">
                <div class="container">
                    <h2 className="cormorant-sc-bold text-3xl text-white mt-8 font-black animate__animated animate__fadeInDown">BLOG</h2>
                </div>
            </div>
        </div>
		<div className="cat">
			<h3>Categorias:</h3>
		</div>

		<ButtonList categories={categories} filterCategory={filterCategory}/>

		<ArticleList articles={articles}/>
        </>
    )
}
export default Blog;