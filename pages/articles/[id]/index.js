import Link from 'next/link'
import Meta from "../../../components/Meta";
import {server} from "../../../config";

const article = ({ article }) => {
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (contex) => {
    const res = await fetch(`${server}/api/articles/${contex.params.id}`)
    const article = await res.json();

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const article = await res.json()

    const ids = article.map((article) => article.id)
    const paths = ids.map((id) => ({params:{id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

// export const getStaticProps = async (contex) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${contex.params.id}`)
//     const articles = await res.json();
//
//     return {
//         props: {
//             articles,
//         },
//     }
// }
//
// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const articles = await res.json()
//
//     const ids = articles.map((articles) => articles.id)
//     const paths = ids.map((id) => ({params:{id: id.toString()}}))
//
//     return {
//         paths,
//         fallback: false
//     }
// }

export default article;