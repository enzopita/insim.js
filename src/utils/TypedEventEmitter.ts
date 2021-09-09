import EventEmitter from 'events';
import TypedEmitter from 'typed-emitter';

export class TypedEventEmitter<T> extends (EventEmitter as { new <T>(): TypedEmitter<T> })<T> {}
