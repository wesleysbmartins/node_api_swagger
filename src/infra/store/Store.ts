import { IStore } from "./IStore";

export class StoreData {
    id?: number;
}

export class Store<T extends StoreData> implements IStore<T> {
    private instance: T[];

    constructor() {
        this.instance = [];
    }

    get(): T[] {
        return this.instance;
    }

    add(value: T): T[] {
        value.id = this.instance.length + 1;

        this.instance.push(value);
        
        return this.instance.sort();
    }

    update(value: T): T[] {
        for(let i = 0; i < this.instance.length; i++) {
            if(this.instance[i].id === value.id) {
                this.instance[i] = value;
            }
        }

        return this.instance.sort();
    }

    remove(id: number): T[] {
        this.instance = this.instance.filter((v) => v.id !== id);

        return this.instance.sort();
    }
}
