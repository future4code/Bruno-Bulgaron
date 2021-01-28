import { failureMessage } from '../messages';

export class UsersBusiness {
    public async signUp(
        userData: any,
        idGenerator: any,
        hashManager: any,
        authenticator: any,
        UsersDatabase: any
    ): Promise<any>{
        
        const hashedPassword = await hashManager.hash(userData.password);
        const id = idGenerator.generate();

        const signUp = await UsersDatabase.createUser({
            id,
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
            role: userData.role
        });

        const token = authenticator.generateToken({ id, role: userData.role });

        return token;
    };

    public async login(
        userData: any,
        UsersDatabase: any,
        HashManager: any,
        Authenticator: any
    ): Promise<any>{
        
        const userLogged = await UsersDatabase.getUserByEmail(userData.email)

        if(!userLogged){
            throw new Error(failureMessage.login);
        }
        
        const authorization = await HashManager.compare(
            userData.password, userLogged.password
        );

        if(authorization){
            const token = Authenticator.generateToken({ id: userLogged.id, role: userLogged.role });
            return token;
        }else{
            throw new Error(failureMessage.login);
        };        
    };
}