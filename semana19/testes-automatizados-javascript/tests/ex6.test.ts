import {BaseDatabase} from '../src/data/BaseDatabase';
import {PostDatabase} from '../src/data/PostDatabase';

describe("Teste async do ex6 com PostDatabase, etc", () => {
    test("Teste que crie um post no banco de dados e verifique se ele foi criado (fazendo uma query pelo id).", async () => {
        const postDB = new PostDatabase();

        
        await postDB.createPost("1", "Meu Post", "Post Topzera demais");
        const postFromDb = await postDB.getPostById("1");
        
        expect(postFromDb).not.toBe(undefined);
        expect(postFromDb).toEqual({
            id: '1',
            title: 'Meu Post',
            content: 'Post Topzera demais'
        });

        afterAll(async () => {
            await postDB.deleteUserById('1');
            await BaseDatabase.destroyConnection();
        });
    });
});