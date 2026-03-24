// Add JavaScript below
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('posts');
        data.slice(0,20).forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            container.appendChild(postDiv);
        });
    })

