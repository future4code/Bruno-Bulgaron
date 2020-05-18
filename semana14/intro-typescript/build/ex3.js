const allPosts = [
    {
        name: 'Captain Jack Sparrow',
        text: 'Savy?'
    },
    {
        name: 'Will Turner',
        text: 'We have to get her back, Jack!'
    },
    {
        name: 'Captain Jack Sparrow',
        text: 'Why is the rum gone??!'
    },
    {
        name: 'Will Turner',
        text: 'My father was NOT a pirate!'
    },
    {
        name: 'Tia Dalma',
        text: 'A touch... OF DESTINY!!!'
    }
];
const author = "Captain Jack Sparrow";
console.log(allThemPosts(allPosts, author));
function allThemPosts(allPosts, author) {
    return allPosts.filter(post => {
        return post.name === author;
    });
}
//# sourceMappingURL=ex3.js.map