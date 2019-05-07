import { GlobalRootInjector } from '../../main/main.injector';
import { DispatcherService } from '../../@services/dispatcher.service';

export abstract class ApplicationDispatcher {
    dispatcher = GlobalRootInjector().get(DispatcherService)
}
