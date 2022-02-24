const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res=> res.json())
    .then(data => displayComments(data))
}

    const section = document.getElementById('comments-section');
const displayComments = (comments) => {
        for(const comment of comments) {
            // console.log(comment);
            
            const div = document.createElement('div');
            div.classList.add('comments');
            div.innerHTML = `
            <div onclick="commentDetails(${comment.id})">
            <h3>Name: ${comment.name}</h3>
            <p>Email: ${comment.email}</p>
            </div>
            `;
            section.appendChild(div);
        }
}

// details section
const commentDetails = commentId => {
    // console.log(commentId)
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> displayCommentDetails(data))

}

        const detailSection =document.getElementById("detail-section");
        

const displayCommentDetails = details => {
    console.log(details)
    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
    <h1>${details.id}</h1>
    <h3>${details.name}</h1>
    <h5>${details.email}</h1>
    `;
    detailSection.appendChild(detailsDiv);
}
