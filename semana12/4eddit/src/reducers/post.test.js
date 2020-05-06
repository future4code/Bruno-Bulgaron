import { setPosts, setPostDetails } from '../actions/post';
import post from './post'

describe("Testes do reducers de post", () => {
    test("Teste do set all post", () => {
        // Preparação        
        const mockState = {
            posts: []
        }
        const mockPost = [{
            id: 1,
            text: 'Teste bla bla bla'
        }]
        const mockAction = setPosts(mockPost)

        // Execução
        const newState = post(mockState, mockAction)

        // Verificação
        expect(newState.posts).toHaveLength(1)
        expect(newState.posts[0].id).toBe(mockPost[0].id)
        expect(newState.posts[0].text).toBe(mockPost[0].text)
    })
    test("Teste do set detail post", () => {
        // Preparação
        const mockState = {
            postDetails: []
        }

        const mockComments = [{
            id: 20,
            text: 'Sou um comentário'
        }]

        const mockAction = setPostDetails(mockComments)

        // Execução
        const newState = post(mockState, mockAction)

        // Verificação
        expect(newState.postDetails).toHaveLength(1);
        expect(newState.postDetails[0].id).toBe(mockComments[0].id);
        expect(newState.postDetails[0].text).toBe(mockComments[0].text);
    })
})