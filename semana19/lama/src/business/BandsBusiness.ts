import {failureMessage} from '../messages';

export class BandsBusiness {
    public async createBand(
        bandData: any,
        IdGenerator: any,
        Authenticator: any,
        BandsDatabase: any
    ): Promise<void>{        
        const auth = Authenticator.getData(bandData.token);

        if(auth.role !== "admin"){
            throw new Error(failureMessage.role)
        }

        const id = IdGenerator.generate();        

        const createBand = await BandsDatabase.createBand({
            id,
            name: bandData.name,
            music_genre: bandData.music_genre,
            responsible: bandData.responsible
        });        
    };

    public async getBandById(
        data: any,
        BandsDatabase: any,
        Authenticator: any,

    ): Promise<any>{
        const auth = Authenticator.getData(data.token);

        if(!auth) return new Error("Erro auth");

        const band = await BandsDatabase.getBandById(data.id);

        if(!band){
            throw new Error(failureMessage.bandNotFound);
        }

        return band;
    };
};