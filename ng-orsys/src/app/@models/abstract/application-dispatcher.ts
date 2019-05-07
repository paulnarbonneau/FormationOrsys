import { GobalRootInjector } from '../../main/main.injector';
import { DispatcherService } from '../../@services/dispatcher.service';

export abstract class ApplicationDispatcher {
    dispatcher = GobalRootInjector().get(DispatcherService)
}
