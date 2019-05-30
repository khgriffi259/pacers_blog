import React from 'react'
import BlogSummary from './BlogSummary'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
    const { blogs } = props;
    return (
        <div className="blog-list section">
            {blogs && blogs.map(blog => {
                return (
                    <Link to = {'/blog/' + blog.id} key={blog.id}>
                        <BlogSummary blog={blog} />
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogList