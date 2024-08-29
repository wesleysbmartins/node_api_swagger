export interface IStore<T> {
    get(): T[];
    add(value: T): T[];
    update(value: T): T[];
    remove(id: number): T[];
}
