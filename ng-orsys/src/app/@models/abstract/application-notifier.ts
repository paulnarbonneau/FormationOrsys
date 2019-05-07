import { GobalRootInjector } from '../../main/main.injector';
import { NotifierService } from '../../@services/notifier.service';

export abstract class ApplicationNotifier {
    notifier = GobalRootInjector().get(NotifierService)
}
