import { setPosts, setPostDetails } from './post';

describe("Post Actions", () => {
    test('Busca os posts da API', () => {
        // Preparação
        const mockPost = "Eu sou um post!";

        // Execução
        const action = setPosts(mockPost);

        // Verificação
        expect(action.type).toBe("SET_POSTS")
        expect(action.payload.posts).toBe(mockPost)

    })
    test('Busca os detalhes dos posts', () => {
        // Preparação
        const mockPostDetails = "Detalhes do post";

        // Execução
        const action = setPostDetails(mockPostDetails);

        // Verificação
        expect(action.type).toBe("SET_POST_DETAILS")
        expect(action.payload.postDetails).toBe(mockPostDetails)
    })
})