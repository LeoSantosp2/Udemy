// Singleton - GoF | Factory method - GoF
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDataBase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log('Retornando instância já criada.');
            return Database.database;
        }
        console.log('Criando nova instância.');
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

const db1 = Database.getDataBase('localhost', 'root', '123456');

db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '123456');

db2.connect();

const db3 = Database.getDataBase('localhost', 'root', '123456');

db3.connect();

const db4 = Database.getDataBase('localhost', 'root', '123456');

db4.connect();
