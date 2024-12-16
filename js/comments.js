document.addEventListener("DOMContentLoaded", () => {
    const commentsContainer = document.getElementById("newsCommentsContainer");
    const preloader = document.getElementById("newsCommentsPreloader");

    async function loadComments() {
        try {
            preloader.classList.add("news__comments__preloader--on");

            const postId = Math.floor(Math.random() * 100) + 1;
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}&_limit=3`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`error code: ${response.status}`);
            }

            const commentsList = await response.json();

            preloader.classList.remove("news__comments__preloader--on");

            commentsList.forEach(comment => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("news__comments");

                commentElement.innerHTML = `
                        <article>
                            <h3>${comment.name}</h3>
                            <p><strong>email:</strong> ${comment.email}</p>
                            <p>${comment.body}</p>
                        </article>
                        `;

                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            preloader.classList.remove("news__comments__preloader--on");
            commentsContainer.innerHTML = '<h3>Что-то пошло не так</h3>';
        }
    }

    loadComments();
});