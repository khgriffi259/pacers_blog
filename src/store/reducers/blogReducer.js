const initState = {
    blogs: [
        {id: 1, title: 'Kyle gets the big job!cl', content: 'blah blah blah'},
        {id: 1, title: 'Score playoff tickets!', content: 'blah blah blah'},
        {id: 1, title: 'This is your dream house!', content: 'blah blah blah'}
    ]
}
const blogReducer = (state = initState, action) => {

    switch (action.type) {
        
        case 'CREATE_BLOG':
            console.log('created blog ', action.blog);
            return state;
        case 'CREATE_BLOG_ERROR':
            console.log('create blog error ', action.err);
            return state;
        default:
            return state;
        }            

}

export default blogReducer