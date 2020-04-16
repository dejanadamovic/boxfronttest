import Vue from 'vue';
import { JsonServiceClient } from '@servicestack/client';

export const client = new JsonServiceClient('/');

export {
    errorResponse, errorResponseExcept,
    splitOnFirst, toPascalCase,
    queryString,
} from '@servicestack/client';

export {
    ResponseStatus, ResponseError,
    Hello, HelloResponse,
} from './dtos';


// Shared state between all Components
interface State {
}

class EventBus extends Vue {
}

export const bus = new EventBus({ data: { } });
